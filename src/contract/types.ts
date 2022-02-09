import {
  AccountantFactory,
  ERC721LicenseFactory,
  ETHExpirationCollectorFactory,
  ETHPurchaserFactory,
  GeoWebCoordinateFactory,
  GeoWebParcelFactory,
  SimpleETHClaimerFactory,
} from '@geo-web/contracts';

export interface ContractAddresses {
  accountant: string;
  erc721License: string;
  ethExpirationCollector: string;
  ethPurchaser: string;
  geoWebCoordinate: string;
  geoWebCoordinatePath: string;
  geoWebParcel: string;
  simpleETHClaimer: string;
}

export interface Contracts {
  geoWebAccountantContract: ReturnType<typeof AccountantFactory.connect>
  geoWebERC721LicenseContract: ReturnType<typeof ERC721LicenseFactory.connect>
  geoWebETHExpirationCollectorContract: ReturnType<typeof ETHExpirationCollectorFactory.connect>
  geoWebETHPurchaserContract: ReturnType<typeof ETHPurchaserFactory.connect>
  geoWebCoordinateContract: ReturnType<typeof GeoWebCoordinateFactory.connect>
  geoWebParcelContract: ReturnType<typeof GeoWebParcelFactory.connect>
  geoWebSimpleETHClaimerContract: ReturnType<typeof SimpleETHClaimerFactory.connect>
}

export enum ChainId {
  Mainnet = 1,
  Rinkeby = 4,
  Local = 31337,
}
