import {
  AccountantFactory,
  ERC721LicenseFactory,
  ETHExpirationCollectorFactory,
  ETHPurchaserFactory,
  GeoWebCoordinateFactory,
  GeoWebParcelFactory,
  SimpleETHClaimerFactory,
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
    geoWebAccountantContract: AccountantFactory.connect(
      addresses.accountant,
      signerOrProvider as Signer | Provider,
    ),
    geoWebERC721LicenseContract: ERC721LicenseFactory.connect(
      addresses.erc721License,
      signerOrProvider as Signer | Provider,
    ),
    geoWebETHExpirationCollectorContract: ETHExpirationCollectorFactory.connect(
      addresses.ethExpirationCollector,
      signerOrProvider as Signer | Provider,
    ),
    geoWebETHPurchaserContract: ETHPurchaserFactory.connect(
      addresses.ethPurchaser,
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
    geoWebSimpleETHClaimerContract: SimpleETHClaimerFactory.connect(
      addresses.simpleETHClaimer,
      signerOrProvider as Signer | Provider,
    ),
  };
};
