import Packet from '../../Packet';
import { PlayServerbound } from '../../../types/PacketIds';
import type Vector3 from '../../../../types/Vector3';

export default class PlayerDiggingPacket extends Packet {
    public static readonly id = PlayServerbound.PlayerDigging;

    public Status!: number;
    public Location!: Vector3;
    public Face!: number;

    public decrypt() {
        this.Status = this.readVarInt();
        this.Location = this.readPosition();
        this.Face = this.readByte();
    }
}
