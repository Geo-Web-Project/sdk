import { ChainId, ContractAddresses } from './types';

const chainIdToAddresses: { [chainId: number]: ContractAddresses } = {
  [ChainId.Rinkeby]: {
    geoWebCoordinate: '0xFa715d9a283b38A0bCAEC012AAE3877690F5Bb72',
    geoWebCoordinatePath: '0x1BeF8BD9862974868C27CDAC03E9aEc785456cf6',
    geoWebParcel: '0xF1ec2e713DF0c7Bbad390Ae52a17a7Ed35059DaA',
    erc721License: '0x1f88b79438Be7dc59d2644168D2E0879e283fFCb',
    fairLaunchClaimer: '0xe62D6E28597471a84daa57392021a21696e17404',
    reclaimer: '0xaE62A19F16b0573006BC61183c9C1d141d1B9433',
    auctionSuperApp: '0xe7B42eD377937682D458E74352D621690165d7F1',
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
