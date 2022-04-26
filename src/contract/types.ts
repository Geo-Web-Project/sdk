import {
  ERC721LicenseFactory,
  GeoWebCoordinateFactory,
  GeoWebParcelFactory,
  AuctionSuperAppFactory,
  FairLaunchClaimerFactory,
  ReclaimerFactory,
} from '@geo-web/contracts';

export interface ContractAddresses {
  erc721License: string;
  auctionSuperApp: string;
  fairLaunchClaimer: string;
  geoWebCoordinate: string;
  geoWebCoordinatePath: string;
  geoWebParcel: string;
  reclaimer: string;
}

export interface Contracts {
  geoWebERC721LicenseContract: ReturnType<typeof ERC721LicenseFactory.connect>
  geoWebCoordinateContract: ReturnType<typeof GeoWebCoordinateFactory.connect>
  geoWebParcelContract: ReturnType<typeof GeoWebParcelFactory.connect>
  geoWebAuctionSuperAppContract: ReturnType<typeof AuctionSuperAppFactory.connect>
  geoWebFairLaunchClaimerContract: ReturnType<typeof FairLaunchClaimerFactory.connect>
  geoWebReclaimerContract: ReturnType<typeof ReclaimerFactory.connect>
}

export enum ChainId {
  Mainnet = 1,
  Rinkeby = 4,
  Local = 31337,
}
