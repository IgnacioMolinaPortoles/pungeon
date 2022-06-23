import "./landing.css";
import dungeon from "../../assets/images/utils/image.png";
import { Link } from "react-router-dom";
import potion from "../../assets/images/utils/potion.png";

const Landing = () => {
  return (
    <div className="mainContainer">
      <div className="navbar">
        <div className="navContainer">
          <img src={potion} className="icon" />

          <a href="#about" className="navItem">
            About
          </a>
        </div>
      </div>
      <div className="hero">
        <div className="heroContainer">
          <div className="heroInfo">
            <div className="heroTitle">Pochinos Dungeon</div>
            <p className="heroDescription">
              Play-For-Fun Crypto Dungeon Game where you will be the owner of
              everything!
            </p>
          </div>
          <img className="dungeonImage" src={dungeon} />
        </div>
      </div>
      <div className="playContainer">
        {/* to="/play" */}
        <span
          className="transfer-button landingPlayButton"
          onClick={() => alert("You are one step away from the pochinos")}
        >
          Play!
        </span>
      </div>
      <div id="about" className="aboutContainer">
        <h2>About</h2>
        <p>
          Hey! Welcome to Pochinos Dungeon, this will be a super crypto project
          and also a play-for-fun game that will go through alot of amazing
          stages.
        </p>
        <br />
        <p>
          In this first stage you will be able to mint your character and name
          it. Also you can send to a friend as a gift!
        </p>
        <br />
        <h3>And a more technical view...</h3>
        <p>
          This will be my version of the series of challenges on{" "}
          <a href="https://speedrunethereum.com/" target="_blank">
            speedrunethereum
          </a>
          . So the roadmap will be
        </p>

        <ol>
          <li>
            <p>NFT Minting</p>
          </li>
          <li>
            <p>Pochino Gold Token Staking</p>
          </li>
          <li>
            <p>Gold Token Vendor</p>
          </li>
          <li>
            <p>Mini games</p>
          </li>
          <li>
            <p>And last but not least, the PixelDex!</p>
          </li>
        </ol>
      </div>

      <div className="footerContainer">
        <div className="myInfo">
        <span>My social media</span>
        <a>Twitter</a>
        <a>Linkeding</a>
        </div>
        <div>
          <a
            href="https://pixel-poem.itch.io/dungeon-assetpuck"
            target="_blank"
          >
            Sprites
          </a>
          :
          <a href="https://twitter.com/pixel_poem" target="_blank">
            Pixel Poem
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
