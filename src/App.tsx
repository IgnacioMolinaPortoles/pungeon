import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Flufarm from "./screens/Home/Home";
import { ethers } from "ethers";
import { characterMintContract } from "./utils/contants";
import pochinosMintAbi from "./utils/abis/pochinosCharacters.json";
import MintCharacter from "./components/mintCharacter/MintCharacter";
import { PochinoAttributes, PochinoRawAttributes } from "./utils/Interfaces";
import { parsePochinoAttributes } from "./utils/utils";

function App() {
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);
  const [hasFlupass, setHasCharacter] = useState<boolean>(false);
  const [pochinoAttributes, setPochinoAttributes] =
    useState<PochinoAttributes | null>(null);
  const [defaultCharacters, setDefaultCharacters] = useState<
    PochinoAttributes[] | null
  >(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Actions
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have MetaMask!");
        setIsLoading(false);
        return;
      } else {
        console.log("We have the ethereum object", ethereum);

        const accounts = await ethereum.request<string[]>({
          method: "eth_accounts",
        });

        if (accounts?.length !== 0) {
          const account: string = accounts![0]!;

          console.log("Found an authorized account:", account);
          setCurrentAccount(account);
        } else {
          console.log("No authorized account found");
        }
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request<string>({
        method: "eth_requestAccounts",
      });

      if (accounts) {
        setCurrentAccount(accounts[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    checkIfWalletIsConnected();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const fetchNFTMetadata = async () => {
      console.log("Checking for Character NFT on address:", currentAccount);

      const provider = new ethers.providers.Web3Provider(
        window.ethereum as any
      );
      const signer = provider.getSigner();
      const gameContract = new ethers.Contract(
        characterMintContract,
        pochinosMintAbi,
        signer
      );

      const characterData: PochinoAttributes =
        await gameContract.checkIfUserHasNFT();

      if (characterData.imageURI != "") {
        console.log(characterData);
        setHasCharacter(true);
        setPochinoAttributes(characterData);
      } else {
        const defaultCharacters: [PochinoRawAttributes] =
          await gameContract.getAllDefaultCharacters();

        let dataParsed = defaultCharacters.map((item) =>
          parsePochinoAttributes(item)
        );

        setDefaultCharacters(dataParsed);
        setHasCharacter(false);
      }
      setIsLoading(false);
    };

    if (currentAccount) {
      console.log("CurrentAccount:", currentAccount);
      fetchNFTMetadata();
    }
  }, [currentAccount]);

  const mintCharacter = async (id: number) => {
    setIsLoading(true);
    let name = prompt("Enter the name!");

    if (!name) {
      alert("Name cannot be empty!");
      return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
    const signer = provider.getSigner();
    const gameContract = new ethers.Contract(
      characterMintContract,
      pochinosMintAbi,
      signer
    );

    const txn = await gameContract.mintCharacterNFT(id, name);
    // console.log(txn);

    if (txn.blockNumber) {
      setHasCharacter(true);
    }
    setIsLoading(false);
  };

  // const buySeeds = async () => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  //   const signer = provider.getSigner();
  //   const gameContract = new ethers.Contract(
  //     characterMintContract,
  //     pochinosMintAbi,
  //     signer
  //   );

  //   const txn = await gameContract.buySeeds();
  //   console.log(txn);

  //   alert("En unos segundos tendras tus semillas!");
  // };

  // if (isLoading) {
  //   return <>cargando</>;
  // }

  return (
    <div className="App">
      {!currentAccount && (
        <div className="connect-background">
          <button className="transfer-button" onClick={connectWalletAction}>
            Connect
          </button>
        </div>
      )}
      <div className="farm">
        {currentAccount && !hasFlupass && (
          <MintCharacter
            defaultCharacters={defaultCharacters}
            onCharacterClick={(id: number) => mintCharacter(id)}
          />
        )}
        {currentAccount && hasFlupass && (
          <Flufarm
            pochinoAttributes={pochinoAttributes}
            currentAccount={currentAccount}
          />
        )}
      </div>
    </div>
  );
}

export default App;
