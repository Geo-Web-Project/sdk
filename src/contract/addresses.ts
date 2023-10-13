import { ChainId, ContractAddresses } from "./types";

const chainIdToAddresses: { [chainId: number]: ContractAddresses } = {
  [ChainId.Optimism]: {
    registryDiamond: "0xBA1231785A7b4AC0E8dC9a0403938C2182cE4A4e",
  },
  [ChainId.Goerli]: {
    registryDiamond: "0x6a1E708Cb134DDff5259cb274A7407E0a6859F14",
  },
  [ChainId.OptimismGoerli]: {
    registryDiamond: "0x871C2467D5832226E03853b91Cd00764985EA07C",
  },
  [ChainId.Sepolia]: {
    registryDiamond: "0xaDD2eFb7f87Db4003c50d4aE60Bcc82b255F9222",
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
