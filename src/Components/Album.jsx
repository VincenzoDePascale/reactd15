import Topbar from "./Topbar";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Album = () => {
  const params = useParams();
  const [album, setAlbum] = useState();

  const AlbumFetch = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${params.id}`
      );
      if (response.ok) {
        const data = await response.json();
        setAlbum(data);
      } else {
        console.log("album errore in if");
      }
    } catch (err) {
      console.log("album errore in catch");
    }
  };

  useEffect(() => {
    AlbumFetch();
  }, []);

  console.log("album params", params);

  console.log("album data:", album);

  //TODO funziona tutto! devi solo importare i dati da "album" e fare l'html!

  return (
    <>
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <Topbar />
        <div className="row">
          <div className="col-md-3 pt-5 text-center" id="img-container"></div>
          <div className="col-md-8 p-5">
            <div className="row">
              <div className="col-md-10 mb-5" id="trackList"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;
