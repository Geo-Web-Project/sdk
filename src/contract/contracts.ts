import {
  ERC721LicenseFactory,
  GeoWebCoordinateFactory,
  GeoWebParcelFactory,
  AuctionSuperAppFactory,
  FairLaunchClaimerFactory,
  ReclaimerFactory
} from '@geo-web/contracts';
import type { Signer } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import { getContractAddressesForChainOrThrow } from './addresses';
import { Contracts } from './types';

/**
 * Get contract instances that target the Ethereum mainnet
 * or a supported testnet. Throws if there are no known contracts
 * deployed on the corresponding chain.
 * @param chainId The desired chain id
 * @param signerOrProvider The ethers v5 signer or provider
 */
export const getContractsForChainOrThrow = (
  chainId: number,
  signerOrProvider?: Signer | Provider,
): Contracts => {
  const addresses = getContractAddressesForChainOrThrow(chainId);

  return {
    geoWebERC721LicenseContract: ERC721LicenseFactory.connect(
      addresses.erc721License,
      signerOrProvider as Signer | Provider,
    ),
    geoWebCoordinateContract: GeoWebCoordinateFactory.connect(
      addresses.geoWebCoordinate,
      signerOrProvider as Signer | Provider,
    ),
    geoWebParcelContract: GeoWebParcelFactory.connect(
      addresses.geoWebParcel,
      signerOrProvider as Signer | Provider,
    ),
    geoWebAuctionSuperAppContract: AuctionSuperAppFactory.connect(
      addresses.auctionSuperApp,
      signerOrProvider as Signer | Provider,
    ),
    geoWebFairLaunchClaimerContract: FairLaunchClaimerFactory.connect(
      addresses.fairLaunchClaimer,
      signerOrProvider as Signer | Provider,
    ),
    geoWebReclaimerContract: ReclaimerFactory.connect(
      addresses.reclaimer,
      signerOrProvider as Signer | Provider,
    ),
  };
};
