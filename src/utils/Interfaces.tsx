import { BigNumber } from "ethers";

export interface PochinoAttributes {
  baseDamage: number;
  characterIndex: number;
  critChance: number;
  hp: number;
  imageURI: string;
  lifeSteal: number;
  name: string;
}

export interface PochinoRawAttributes {
  baseDamage: BigNumber;
  characterIndex: BigNumber;
  critChance: BigNumber;
  hp: BigNumber;
  imageURI: string;
  lifeSteal: BigNumber;
  name: string;
}
