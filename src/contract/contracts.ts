import { RegistryDiamondFactory } from "@geo-web/contracts";

import type { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import { getContractAddressesForChainOrThrow } from "./addresses";
import { Contracts } from "./types";

/**
 * Get contract instances that target the Ethereum mainnet
 * or a supported testnet. Throws if there are no known contracts
 * deployed on the corresponding chain.
 * @param chainId The desired chain id
 * @param signerOrProvider The ethers v5 signer or provider
 */
export const getContractsForChainOrThrow = (
  chainId: number,
  signerOrProvider?: Signer | Provider
): Contracts => {
  const addresses = getContractAddressesForChainOrThrow(chainId);

  return {
    registryDiamondContract: RegistryDiamondFactory.connect(
      addresses.registryDiamond,
      signerOrProvider as Signer | Provider
    ),
  };
};
