import type DataBuffer from '../../DataBuffer';
import type ClientBoundPacket from '../ClientBoundPacket';

export default class ClientBoundGameEventPacket implements ClientBoundPacket {
    public constructor(public event: Type, public param: number) {}

    public write(packet: DataBuffer): DataBuffer {
        packet.writeUnsignedByte(this.event);
        packet.writeFloat(this.param);
        return packet;
    }
}

export enum Type {
    NO_RESPAWN_BLOCK_AVAILABLE,
    START_RAINING,
    STOP_RAINING,
    CHANGE_GAME_MODE,
    WIN_GAME,
    DEMO_EVENT,
    ARROW_HIT_PLAYER,
    RAIN_LEVEL_CHANGE,
    THUNDER_LEVEL_CHANGE,
    PUFFER_FISH_STING,
    GUARDIAN_ELDER_EFFECT,
    IMMEDIATE_RESPAWN,
}
