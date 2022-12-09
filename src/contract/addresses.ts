import { ChainId, ContractAddresses } from "./types";

const chainIdToAddresses: { [chainId: number]: ContractAddresses } = {
  [ChainId.Goerli]: {
    registryDiamond: "0x6a1E708Cb134DDff5259cb274A7407E0a6859F14",
  },
  [ChainId.OptimismGoerli]: {
    registryDiamond: "0x578182C07936c9acE19E4c740aA09fE1144C294B",
  },
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
