import Topbar from "./Topbar";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Artist = () => {
  const params = useParams();
  const [artist, setArtist] = useState();

  const ArtistFetch = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${params.id}`
      );
      if (response.ok) {
        const data = await response.json();
        setArtist(data);
      } else {
        console.log("artist errore in if");
      }
    } catch (err) {
      console.log("artist err in catch");
    }
  };

  useEffect(() => {
    ArtistFetch();
  }, []);

  console.log("artist params", params);

  console.log("artist data:", artist);

  //TODO artist esiste ed è quello che ti serve, ma devi continuare, è un lavoro fatto a metà? forse devi fare una seconda fetch?

  return (
    <>
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <Topbar />
        <div className="row">
          <div className="col-12 col-md-10 col-lg-10 mt-5">
            {/* <h2 className="titleMain"></h2> */}
            <div id="followers"></div>
            <div
              className="d-flex justify-content-center"
              id="button-container"
            >
              <button
                className="btn btn-success mr-2 mainButton d-none"
                id="playButton"
              >
                PLAY
              </button>
              <button
                className="btn btn-outline-light mainButton d-none"
                id="followButton"
              >
                FOLLOW
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
            <div className="mt-4 d-flex justify-content-start">
              <h2 className="text-white font-weight-bold">Tracks</h2>
            </div>
            <div className="pt-5 mb-5">
              <div className="row" id="apiLoaded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;
