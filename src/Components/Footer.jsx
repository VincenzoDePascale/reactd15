import { useSelector } from "react-redux";
import Next from "../assets/Next.png";
import Play from "../assets/Play.png";
import Previous from "../assets/Previous.png";
import Repeat from "../assets/Repeat.png";
import Shuffle from "../assets/Shuffle.png";

const Footer = () => {
  const playerSong = useSelector((state) => state.redBasic.playerSong);
  console.log("playerSong", playerSong);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row">
        <div className="col-lg-3 offset-lg-2">
          <div className="text-light d-flex">
            <img
              className="me-1"
              style={{ height: "4.5rem" }}
              src={playerSong?.album?.cover}
              alt="cover"
            />
            <div className="d-flex flex-column p-1">
              <p>{playerSong?.artist?.name}</p>
              <p>{playerSong?.title}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <div className="row flex-nowrap">
                <a href="alt">
                  <img src={Shuffle} alt="shuffle" />
                </a>
                <a href="alt">
                  <img src={Previous} alt="shuffle" />
                </a>
                <a href="alt">
                  <img src={Play} alt="shuffle" />
                </a>
                <a href="alt">
                  <img src={Next} alt="shuffle" />
                </a>
                <a href="alt">
                  <img src={Repeat} alt="shuffle" />
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
