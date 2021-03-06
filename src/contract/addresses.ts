import { ChainId, ContractAddresses } from "./types";

const chainIdToAddresses: { [chainId: number]: ContractAddresses } = {
  [ChainId.OptimismKovan]: {
    geoWebCoordinate: "0x8B5c06E0b08C457a4075d7ECDce049f2a6dD1235",
    geoWebCoordinatePath: "0x4D1D2929D62A8786b81Fc788a4a7484a3ea00194",
    geoWebParcel: "0xF28f394F61679e8B1Ed66ce4A18CC4eCF338c43c",
    erc721License: "0xAf133619228ef5897d6cA61B9eBE7d7ADe6c7995",
    fairLaunchClaimer: "0x18D5C86985F340C5231E4E41cAc4016EBb19AF34",
    reclaimer: "0xFa715d9a283b38A0bCAEC012AAE3877690F5Bb72",
    auctionSuperApp: "0xF1ec2e713DF0c7Bbad390Ae52a17a7Ed35059DaA",
  },

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
export const getContractAddressesForChainOrThrow = (
  chainId: number
): ContractAddresses => {
  if (!chainIdToAddresses[chainId]) {
    throw new Error(
      `Unknown chain id (${chainId}). No known contracts have been deployed on this chain.`
    );
  }
  return chainIdToAddresses[chainId];
};
