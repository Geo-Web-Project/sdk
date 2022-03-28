import { ChainId, ContractAddresses } from './types';

const chainIdToAddresses: { [chainId: number]: ContractAddresses } = {
  // [ChainId.Rinkeby]: {
  //   geoWebCoordinate: '0x75CD1B88d09b2D8fCF46ec94dc028cF3DB04d96C',
  //   geoWebCoordinatePath: '0xbdbd0Eb8190f1519c7213a0E61256476c01781C7',
  //   geoWebParcel: '0x36Cf448d15Dbf4365c7421FA94dBEC93B95720E4',
  //   accountant: '0x45fdCbcAaBE80b630d83a0f5a0Fb4a8b9cEFf84E',
  //   erc721License: '0xF2282541d384D6d9A5C9B02D020fDFededd8D827',
  //   ethPurchaser: '0xAEAd5f4FAb0cdA5f1E99a12830BF10fF8101c49C',
  //   ethExpirationCollector: '0x8C6e0d49ca34fd262B209509F32aE4eC8D04F9eE',
  //   simpleETHClaimer: '0x8a9c5ceeE10248e00F11c4F1da11349D6FAf6873',
  // }

  // TODO im not sure yet how to do the localhost settings or if they even belong here in the sdk
  // [ChainId.Local]: {
  //   geoWebCoordinate: TODO - solidify local addresses here
  //   geoWebCoordinatePath: TODO - solidify local addresses here
  //   geoWebParcel: TODO - solidify local addresses here
  //   accountant: TODO - solidify local addresses here
  //   erc721License: TODO - solidify local addresses here
  //   ethPurchaser: TODO - solidify local addresses here
  //   ethExpirationCollector: TODO - solidify local addresses here
  //   simpleETHClaimer: TODO - solidify local addresses here
  // }

  // [ChainId.Mainnet]: {
  // TODO
  // }
};

/**
 * Get addresses of contracts that have been deployed to the
 * Ethereum mainnet or a supported testnet. Throws if there are
 * no known contracts deployed on the corresponding chain.
 * @param chainId The desired chainId
 */
export const getContractAddressesForChainOrThrow = (chainId: number): ContractAddresses => {
  if (!chainIdToAddresses[chainId]) {
    throw new Error(
      `Unknown chain id (${chainId}). No known contracts have been deployed on this chain.`,
    );
  }
  return chainIdToAddresses[chainId];
};
