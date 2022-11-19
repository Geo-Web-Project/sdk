import { IRegistryDiamondFactory } from "@geo-web/contracts";

export interface ContractAddresses {
  registryDiamond: string;
}

export interface Contracts {
  registryDiamondContract: ReturnType<typeof IRegistryDiamondFactory.connect>;
}

export enum ChainId {
  Goerli = 5,
  OptimismKovan = 69,
  OptimismGoerli = 420,
  Local = 31337,
}
