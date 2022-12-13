import { RegistryDiamondFactory } from "@geo-web/contracts";

export interface ContractAddresses {
  registryDiamond: string;
}

export interface Contracts {
  registryDiamondContract: ReturnType<typeof RegistryDiamondFactory.connect>;
}

export enum ChainId {
  Goerli = 5,
  Optimism = 10,
  OptimismKovan = 69,
  OptimismGoerli = 420,
  Local = 31337,
}
