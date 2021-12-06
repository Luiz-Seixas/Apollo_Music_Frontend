import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

import "../styles/results.css";

export function Results() {
  const { artists, works, albums, searchData } = useContext(AppContext);
  console.log(artists);

  const { name } = useParams();

  console.log(name);

  useEffect(() => {
    if (name) {
      searchData(name);
    }
  }, []);
  return (
    <div id="page">
      <h1>Hello</h1>
      <button
        onClick={() => {
          console.log(artists);
        }}
      >
        click here
      </button>
      <ul className="artistsList">
        <li className="artists">
          {artists.map((artist) => (
            <div>
              <Link to="">
                <h5>Artists</h5>
                <p>{artist.name}</p>
              </Link>
            </div>
          ))}
        </li>
        <li className="works">
          {works.map((work) => (
            <div>
              <h5>Works</h5>
              <p>{work.title}</p>
              <strong>type:</strong>
              <p>{work.type}</p>
            </div>
          ))}
        </li>
        <li className="albums">
          {albums.map((album) => (
            <div>
              <h5>Album</h5>
              <p>{album.title}</p>
              <strong>Artist</strong>
              <p>{album.artist}</p>
              <strong>Date</strong>
              <p>{album.date}</p>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}
