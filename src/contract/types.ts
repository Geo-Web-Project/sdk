import { RegistryDiamondFactory } from "@geo-web/contracts";

export interface ContractAddresses {
  registryDiamond: string;
}

export interface Contracts {
  registryDiamondContract: ReturnType<typeof RegistryDiamondFactory.connect>;
}

export enum ChainId {
  Goerli = 10,
  OptimismKovan = 69,
  Local = 31337,
}
