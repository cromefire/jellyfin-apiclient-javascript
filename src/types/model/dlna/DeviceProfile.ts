import { Optional } from "../../types";
import { CodecProfile } from "./CodecProfile";
import { ContainerProfile } from "./ContainerProfile";
import { DeviceIdentification } from "./DeviceIdentification";
import { DirectPlayProfile } from "./DirectPlayProfile";
import { ResponseProfile } from "./ResponseProfile";
import { SubtitleProfile } from "./SubtitleProfile";
import { TranscodingProfile } from "./TranscodingProfile";
import { XmlAttribute } from "./XmlAttribute";

export interface DeviceProfile {
    Name: Optional<string>;
    Id: Optional<string>;
    Identification: DeviceIdentification;
    FriendlyName: Optional<string>;
    Manufacturer: Optional<string>;
    ManufacturerUrl: Optional<string>;
    ModelName: Optional<string>;
    ModelDescription: Optional<string>;
    ModelNumber: Optional<string>;
    ModelUrl: Optional<string>;
    SerialNumber: Optional<string>;
    EnableAlbumArtInDidl: boolean;
    EnableSingleAlbumArtLimit: boolean;
    EnableSingleSubtitleLimit: boolean;
    SupportedMediaTypes: Optional<string>;
    UserId: Optional<string>;
    AlbumArtPn: Optional<string>;
    MaxAlbumArtWidth: number;
    MaxAlbumArtHeight: number;
    MaxIconWidth: Optional<number>;
    MaxIconHeight: Optional<number>;
    MaxStreamingBitrate: Optional<number>;
    MaxStaticBitrate: Optional<number>;
    MusicStreamingTranscodingBitrate: Optional<number>;
    MaxStaticMusicBitrate: Optional<number>;
    SonyAggregationFlags: Optional<string>;
    ProtocolInfo: Optional<string>;
    TimelineOffsetSeconds: number;
    RequiresPlainVideoItems: boolean;
    RequiresPlainFolders: boolean;
    EnableMSMediaReceiverRegistrar: boolean;
    IgnoreTranscodeByteRangeRequests: boolean;
    XmlRootAttributes: XmlAttribute[];
    DirectPlayProfiles: DirectPlayProfile[];
    TranscodingProfiles: TranscodingProfile[];
    ContainerProfiles: ContainerProfile[];
    CodecProfiles: CodecProfile[];
    ResponseProfiles: ResponseProfile[];
    SubtitleProfiles: SubtitleProfile[];
}