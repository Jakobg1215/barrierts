import type { Socket } from 'net';
import { ConnectionStates } from '../types/ConnectionState';
import type Packet from '../packets/Packet';
import type Server from '../../server';
import PlayerInfoPacket from '../packets/Play/clientbound/PlayerInfoPacket';
import { PlayClientbound } from '../types/PacketIds';
import type { PlayerInfoPlayer } from '../types/PacketFieldArguments';
import Position from '../../types/Position';
import Rotation from '../../types/Rotation';

export default class PlayerConnection {
    private connection: Socket;
    private connectionState = ConnectionStates.Handshaking;
    private username!: string;
    private UUID!: string;
    private position = new Position(0, 4, 0);
    private rotation = new Rotation(0, 0);
    private onGround = true;
    private id!: number;

    public constructor(socket: Socket) {
        this.connection = socket;
    }

    public async sendPacket(packet: Packet, id: number) {
        packet.encrypt();
        this.connection.write(packet.buildPacket(id));
    }

    public sendRaw(data: Buffer) {
        this.connection.write(data);
    }

    public async sendOnlinePlayers(server: Server) {
        const PlayerInfo = new PlayerInfoPacket();
        PlayerInfo.Action = 0;
        PlayerInfo.Player = [];
        const playerfield = class Player implements PlayerInfoPlayer {
            public constructor(name: string, uuid: string) {
                this.Name = name;
                this.UUID = uuid;
                this.DisplayName = JSON.stringify({ text: this.Name });
            }
            public Name!: string;
            public UUID!: string;
            public NumberOfProperties = 0;
            public Gamemode = 1;
            public Ping = 0;
            public HasDisplayName = true;
            public DisplayName!: string;
        };
        server
            .getPlayerManager()
            .getConnections()
            .forEach(async conn => {
                PlayerInfo.Player.push(new playerfield(conn.username, conn.UUID));
            });
        PlayerInfo.NumberOfPlayers = PlayerInfo.Player.length;
        await this.sendPacket(PlayerInfo, PlayClientbound.PlayerInfo);
    }

    public setState(state: ConnectionStates) {
        this.connectionState = state;
    }

    public getState() {
        return this.connectionState;
    }

    public setName(name: string) {
        this.username = name;
    }

    public getName() {
        return this.username;
    }

    public setUUID(UUID: string) {
        this.UUID = UUID;
    }

    public getUUID() {
        return this.UUID;
    }

    public setPosition(position?: { X?: number; Y?: number; Z?: number }) {
        this.position.setX(position?.X ?? this.position.getX());
        this.position.setY(position?.Y ?? this.position.getY());
        this.position.setZ(position?.Z ?? this.position.getZ());
    }

    public getPosition() {
        return this.position;
    }

    public setRotation(rotation?: { yaw: number; pitch: number }) {
        this.rotation.setYaw(rotation?.yaw ?? this.rotation.getYaw());
        this.rotation.setPitch(rotation?.pitch ?? this.rotation.getPitch());
    }

    public getRotation() {
        return this.rotation;
    }

    public setOnGround(onGound: boolean) {
        this.onGround = onGound;
    }

    public getOnGround() {
        return this.onGround;
    }

    public setid(id: number) {
        this.id = id;
    }

    public getID() {
        return this.id;
    }
}
