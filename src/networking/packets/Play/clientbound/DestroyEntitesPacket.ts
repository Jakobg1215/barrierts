import { PlayClientbound } from '../../../types/PacketIds';
import Packet from '../../Packet';

export default class DestroyEntitiesPacket extends Packet {
    public static readonly id = PlayClientbound.DestroyEntities;

    public Count!: number;
    public EntityIDs!: number[];

    public encrypt() {
        this.writeVarInt(this.Count);
        for (let index = 0; index < this.EntityIDs.length; index++) {
            this.writeVarInt(this.EntityIDs[index]);
        }
    }
}
