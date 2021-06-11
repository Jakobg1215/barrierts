import { PlayServerbound } from '../../../types/PacketIds';
import Packet from '../../Packet';

export default class TabCompletePacket extends Packet {
    public static readonly id = PlayServerbound.TabComplete;

    public TransactionId!: number;
    public Text!: string;

    public decrypt() {
        this.TransactionId = this.readVarInt();
        this.Text = this.readString();
    }
}