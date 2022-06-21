import { PochinoAttributes, PochinoRawAttributes } from "./Interfaces";

export const parsePochinoAttributes = (dataRaw: PochinoRawAttributes) => {
  return {
    baseDamage: dataRaw.baseDamage.toNumber(),
    characterIndex: dataRaw.characterIndex.toNumber(),
    critChance: dataRaw.critChance.toNumber(),
    hp: dataRaw.hp.toNumber(),
    imageURI: dataRaw.imageURI,
    lifeSteal: dataRaw.lifeSteal.toNumber(),
    name: dataRaw.name,
  } as PochinoAttributes;
};
