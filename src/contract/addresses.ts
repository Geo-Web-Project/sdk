import { ChainId, ContractAddresses } from "./types";

const chainIdToAddresses: { [chainId: number]: ContractAddresses } = {
  [ChainId.Goerli]: {
    registryDiamond: "0x6CC6d2ba9668d5F8F5D08A45520E935cD6CDfc6f",
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
