import React from "react";
import "./mintCharacter.css";
import warrior from "../../assets/images/characters/warrior.png";
import mage from "../../assets/images/characters/mage.png";
import vampire from "../../assets/images/characters/vampire.png";
import { PochinoAttributes } from "../../utils/Interfaces";

interface IMintCharacterProps {
  onCharacterClick: (id: number) => Promise<void>;
  defaultCharacters: PochinoAttributes[] | null;
}

const MintCharacter = (props: IMintCharacterProps) => {
  return (
    <div className="mint-container">
      <h3 className="mint-title">Select your character</h3>
      <div>
        {props.defaultCharacters?.map((item) => {
          return (
            <img
              key={item.characterIndex}
              onClick={() => props.onCharacterClick(item.characterIndex)}
              className="character"
              src={item.imageURI}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MintCharacter;
