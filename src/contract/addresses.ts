import { ChainId, ContractAddresses } from './types';

const chainIdToAddresses: { [chainId: number]: ContractAddresses } = {
  [ChainId.OptimismKovan]: {
    geoWebCoordinate: '0xa26715061D253A41D1f0BB90f162d54ecC282E57',
    geoWebCoordinatePath: '0xBD260068682aE150CeEbBD9B88109D18EdBc415E',
    geoWebParcel: '0x6E7861d67b7619bc946D73674F1695E428FF3d73',
    erc721License: '0x9F83D8af21FADbbDC8c9e64bA8374FEb623eEFB3',
    fairLaunchClaimer: '0xb49e55847e3E60C78BDd96816b0eF6c1DE60cE86',
    reclaimer: '0xe9b5ab496FD9CD95948D3b4bAAA471Eef313C7CF',
    auctionSuperApp: '0xBB53852D323E26DB296B753dF58B09B9B0924D1b',
  }

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
