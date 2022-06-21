import "./landing.css";
import dungeon from "../../assets/images/utils/image.png";
const Landing = () => {
  return (
    <div className="mainContainer">
      <div className="navbar">
        <div className="navContainer">
          <img />

          <span>About</span>
        </div>
      </div>
      <div className="hero">
        <div className="heroContainer">
          <div className="heroTitle">Pochinos Dungeon</div>
          <img className="dungeonImage" src={dungeon} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
