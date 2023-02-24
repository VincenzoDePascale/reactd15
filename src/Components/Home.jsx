import { useSelector } from "react-redux";

import Topbar from "./Topbar";
import SingleCard from "./SingleCard";

const Home = () => {
  const rockClassic = useSelector((state) => state.redBasic.rockClassic);

  return (
    <>
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <Topbar />
        <div className="row">
          <div className="col-10">
            <div id="searchResults" style={{ display: "none" }}>
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="rock">
              <h2>Rock Classic</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
              >
                {rockClassic?.map((e) => (
                  <SingleCard element={rockClassic[e]} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="pop">
              <h2>Pop Culture</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="popSection"
              >
                {/*map */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="hiphop">
              <h2>#HipHop</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              >
                {/*map */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
