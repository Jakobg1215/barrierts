import HandshakePacket from './packets/Handshaking/Serverbound/HandshakePacket';
import LegacyServerListPingPacket from './packets/Handshaking/Serverbound/LegacyServerListPingPacket';
import EncryptionResponsePacket from './packets/Login/Serverbound/EncryptionResponsePacket';
import LoginPluginResponsePacket from './packets/Login/Serverbound/LoginPluginResponsePacket';
import LoginStartPacket from './packets/Login/Serverbound/LoginStartPacket';
import type Packet from './packets/Packet';
import AdvancementTabPacket from './packets/Play/serverbound/AdvancementTabPacket';
import AnimationPacket from './packets/Play/serverbound/AnimationPacket';
import ChatMessagePacket from './packets/Play/serverbound/ChatMessagePacket';
import ClickWindowButtonPacket from './packets/Play/serverbound/ClickWindowButtonPacket';
import ClickWindowPacket from './packets/Play/serverbound/ClickWindowPacket';
import ClientSettingsPacket from './packets/Play/serverbound/ClientSettingsPacket';
import ClientStatusPacket from './packets/Play/serverbound/ClientStatusPacket';
import CloseWindowPacket from './packets/Play/serverbound/CloseWindowPacket';
import CraftRecipeRequestPacket from './packets/Play/serverbound/CraftRecipeRequestPacket';
import CreativeInventoryActionPacket from './packets/Play/serverbound/CreativeInventoryActionPacket';
import EditBookPacket from './packets/Play/serverbound/EditBookPacket';
import EntityActionPacket from './packets/Play/serverbound/EntityActionPacket';
import GenerateStructurePacket from './packets/Play/serverbound/GenerateStructurePacket';
import HeldItemChangePacket from './packets/Play/serverbound/HeldItemChangePacket';
import InteractEntityPacket from './packets/Play/serverbound/InteractEntityPacket';
import KeepAlivePacket from './packets/Play/serverbound/KeepAlivePacket';
import LockDifficultyPacket from './packets/Play/serverbound/LockDifficultyPacket';
import NameItemPacket from './packets/Play/serverbound/NameItemPacket';
import PickItemPacket from './packets/Play/serverbound/PickItemPacket';
import PlayerAbilitiesPacket from './packets/Play/serverbound/PlayerAbilitiesPacket';
import PlayerBlockPlacementPacket from './packets/Play/serverbound/PlayerBlockPlacementPacket';
import PlayerDiggingPacket from './packets/Play/serverbound/PlayerDiggingPacket';
import PlayerMovementPacket from './packets/Play/serverbound/PlayerMovementpacket';
import PlayerPositionAndRotationPacket from './packets/Play/serverbound/PlayerPositionAndRotationPacket';
import PlayerPositionPacket from './packets/Play/serverbound/PlayerPositionPacket';
import PlayerRotationPacket from './packets/Play/serverbound/PlayerRotationPacket';
import PluginMessagePacket from './packets/Play/serverbound/PluginMessagePacket';
import QueryBlockNBTPacket from './packets/Play/serverbound/QueryBlockNBTPacket';
import QueryEntityNBTPacket from './packets/Play/serverbound/QueryEntityNBTPacket';
import ResourcePackStatusPacket from './packets/Play/serverbound/ResourcePackStatusPacket';
import SelectTradePacket from './packets/Play/serverbound/SelectTradePacket';
import SetBeaconEffectPacket from './packets/Play/serverbound/SetBeaconEffectPacket';
import SetDifficultyPacket from './packets/Play/serverbound/SetDifficultyPacket';
import SetDisplayedRecipePacket from './packets/Play/serverbound/SetDisplayedRecipePacket';
import SpectatePacket from './packets/Play/serverbound/SpectatePacket';
import SteerBoatPacket from './packets/Play/serverbound/SteerBoatPacket';
import SteerVehiclePacket from './packets/Play/serverbound/SteerVehiclePacket';
import TabCompletePacket from './packets/Play/serverbound/TabCompletePacket';
import TeleportConfirmPacket from './packets/Play/serverbound/TeleportConfirmPacket';
import UpdateCommandBlockMinecartPacket from './packets/Play/serverbound/UpdateCommandBlockMinecartPacket';
import UpdateCommandBlockPacket from './packets/Play/serverbound/UpdateCommandBlockPacket';
import UpdateJigsawBlockPacket from './packets/Play/serverbound/UpdateJigsawBlockPacket';
import UpdateSignPacket from './packets/Play/serverbound/UpdateSignPacket';
import UpdateStructureBlockPacket from './packets/Play/serverbound/UpdateStructureBlockPacket';
import UseItemPacket from './packets/Play/serverbound/UseItemPacket';
import VehicleMovePacket from './packets/Play/serverbound/VehicleMovePacket';
import WindowConfirmationPacket from './packets/Play/serverbound/WindowConfirmationPacket';
import PingPacket from './packets/Status/Serverbound/PingPacket';
import RequestPacket from './packets/Status/Serverbound/RequestPacket';

const HandshakingPackets: typeof Packet[] = [];
const StatusPackets: typeof Packet[] = [];
const LoginPackets: typeof Packet[] = [];
const PlayPackets: typeof Packet[] = [];

// Handshaking Packets
HandshakingPackets.push(HandshakePacket);
HandshakingPackets.push(LegacyServerListPingPacket);

// Status Packets
StatusPackets.push(PingPacket);
StatusPackets.push(RequestPacket);

// Login Packets
LoginPackets.push(EncryptionResponsePacket);
LoginPackets.push(LoginPluginResponsePacket);
LoginPackets.push(LoginStartPacket);

// Play Packets
PlayPackets.push(AdvancementTabPacket);
PlayPackets.push(AnimationPacket);
PlayPackets.push(ChatMessagePacket);
PlayPackets.push(ClickWindowButtonPacket);
PlayPackets.push(ClickWindowPacket);
PlayPackets.push(ClientSettingsPacket);
PlayPackets.push(ClientStatusPacket);
PlayPackets.push(CloseWindowPacket);
PlayPackets.push(CraftRecipeRequestPacket);
PlayPackets.push(CreativeInventoryActionPacket);
PlayPackets.push(EditBookPacket);
PlayPackets.push(EntityActionPacket);
PlayPackets.push(GenerateStructurePacket);
PlayPackets.push(HeldItemChangePacket);
PlayPackets.push(InteractEntityPacket);
PlayPackets.push(KeepAlivePacket);
PlayPackets.push(LockDifficultyPacket);
PlayPackets.push(NameItemPacket);
PlayPackets.push(PickItemPacket);
PlayPackets.push(PlayerAbilitiesPacket);
PlayPackets.push(PlayerBlockPlacementPacket);
PlayPackets.push(PlayerDiggingPacket);
PlayPackets.push(PlayerMovementPacket);
PlayPackets.push(PlayerPositionAndRotationPacket);
PlayPackets.push(PlayerPositionPacket);
PlayPackets.push(PlayerRotationPacket);
PlayPackets.push(PluginMessagePacket);
PlayPackets.push(QueryBlockNBTPacket);
PlayPackets.push(QueryEntityNBTPacket);
PlayPackets.push(ResourcePackStatusPacket);
PlayPackets.push(SelectTradePacket);
PlayPackets.push(SetBeaconEffectPacket);
PlayPackets.push(SetDifficultyPacket);
PlayPackets.push(SetDisplayedRecipePacket);
PlayPackets.push(SpectatePacket);
PlayPackets.push(SteerBoatPacket);
PlayPackets.push(SteerVehiclePacket);
PlayPackets.push(TabCompletePacket);
PlayPackets.push(TeleportConfirmPacket);
PlayPackets.push(UpdateCommandBlockMinecartPacket);
PlayPackets.push(UpdateCommandBlockPacket);
PlayPackets.push(UpdateJigsawBlockPacket);
PlayPackets.push(UpdateSignPacket);
PlayPackets.push(UpdateStructureBlockPacket);
PlayPackets.push(UseItemPacket);
PlayPackets.push(VehicleMovePacket);
PlayPackets.push(WindowConfirmationPacket);

export { HandshakingPackets, StatusPackets, LoginPackets, PlayPackets };
