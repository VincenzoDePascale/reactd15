import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SingleCard = (props) => {
  const Dispatch = useDispatch();
  const song = useSelector((state) => state.redBasic.song);
  const MainFetch = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.element}`
      );
      if (response.ok) {
        const data = await response.json();
        Dispatch({ type: "ADD_IN_MAIN", payload: data.data });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    MainFetch();
  }, []);

  return (
    <>
      <div class="col text-center" id={song.id}>
        <Link /* to=`/album_page.html?id=${song.album.id}` */>
          <img class="img-fluid" src={song.album.cover_medium} alt="1" />
        </Link>
        <p>
          <Link /* to="/album_page.html?id=${element.album.id}" */>
            Album:{" "}
            {song.album.title.length < 16
              ? `${song.album.title}`
              : `${song.album.title.substring(0, 16)}...`}
          </Link>

          {/*  <br> */}

          <Link /* to="/artist_page.html?id=${element.artist.id}" */>
            Artist: ${song.artist.name}
          </Link>
        </p>
      </div>
    </>
  );
};

export default SingleCard;
