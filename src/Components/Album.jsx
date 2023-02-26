import Topbar from "./Topbar";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Album = () => {
  const params = useParams();
  const [album, setAlbum] = useState();
  const [songs, setSongs] = useState();

  const AlbumFetch = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${params.id}`
      );
      if (response.ok) {
        const data = await response.json();
        setAlbum(data);
        setSongs(data.tracks.data);
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

  return (
    <>
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <Topbar />
        <div className="row">
          <div className="col-md-3 pt-5 text-center" id="img-container">
            <img src={album?.cover} class="card-img img-fluid" alt="Album" />
            <div class="mt-4 text-center">
              <p class="album-title">{album?.title}</p>
            </div>
            <div class="text-center">
              <p class="artist-name">{album?.artist.name}</p>
            </div>
            <div class="mt-4 text-center">
              <button id="btnPlay" class="btn btn-success" type="button">
                Play
              </button>
            </div>
          </div>
          <div className="col-md-8 p-5">
            <div className="row">
              <div className="col-md-10 mb-5" id="trackList">
                {songs &&
                  songs.map((e) => (
                    <div class="py-3 trackHover">
                      <Link
                        href="#"
                        class="card-title trackHover px-3"
                        style={{ color: "white" }}
                      >
                        {e?.title}
                      </Link>
                      <small class="duration" style={{ color: "white" }}>
                        {Math.floor(
                          parseInt(e?.duration) / 60 // setting the duration minutes
                        )}
                        :
                        {parseInt(e?.duration) % 60 < 10
                          ? "0" + (parseInt(e?.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
                          : parseInt(e?.duration) % 60}
                      </small>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;
