import React, { useState, useEffect } from "react";
import "./home.css";
import { ethers } from "ethers";
import { characterMintContract } from "../../utils/contants";
import pochinosAbi from "../../utils/abis/pochinosCharacters.json";
import { PochinoAttributes } from "../../utils/Interfaces";

interface mainProps {
  pochinoAttributes: PochinoAttributes | null;
  currentAccount: string | null;
}

const Home = (props: mainProps) => {
  const [farmState, setFarmState] = useState("");

  const transfer = async () => {
    let toAddress = prompt("Enter the address to send!");

    if (!toAddress) {
      alert("Address cannot be empty!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
    const signer = provider.getSigner();
    console.log(signer);
    const gameContract = new ethers.Contract(
      characterMintContract,
      pochinosAbi,
      signer
    );

    try {
      const txn = await gameContract.transferOwnToken(
        props.currentAccount,
        toAddress,
        props.pochinoAttributes?.characterIndex
      );
      console.log(txn);

      alert("Mandando!");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="mint-container">
      <h3 className="mint-title">{props.pochinoAttributes?.name}</h3>
      <div className="character-container">
        <img className="character" src={props.pochinoAttributes?.imageURI} />
        <div className="stats">
          <span>{`Health: ${props.pochinoAttributes?.hp}`}</span>
          <span>{`Damage: ${props.pochinoAttributes?.baseDamage}`}</span>
          <span>{`Critical chance: ${props.pochinoAttributes?.critChance}%`}</span>
          <span>{`Life steal: ${props.pochinoAttributes?.lifeSteal}%`}</span>
        </div>

        <div onClick={transfer} className="transfer-button">
          Transfer!
        </div>
      </div>
    </div>
  );
};

export default Home;
