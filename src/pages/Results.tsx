import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../components/header/Header";
import { AppContext } from "../contexts/AppContext";

import "../styles/results.css";

export function Results() {
  const { artists, works, albums, searchData } = useContext(AppContext);
  console.log(artists);
  const { name } = useParams();

  function reduceList(list: any[]) {
    return list.slice(0, 5);
  }

  const reducedArtistsList = reduceList(artists);

  const reducedWorksList = reduceList(works);

  const reducedAlbumsList = reduceList(albums);

  useEffect(() => {
    if (name) searchData(name);
  }, []);

  return (
    <div id="page">
      <Header />
      <div className="content">
        <div className="artistsList">
          <h3>Artists</h3>
          <ul className="artists">
            {reducedArtistsList.map((artist) => {
              const link = `/artist/${artist.id}`;
              return (
                <Link to={link}>
                  <li>
                    <p>{artist.name}</p>
                    <div className="moreInfo">
                      <span>Artist</span>
                    </div>
                  </li>
                  <hr />
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="worksList">
          <h3>Works</h3>
          <ul className="works">
            {reducedWorksList.map((work) => (
              <Link to="">
                <li>
                  <p>{work.title}</p>
                  <div className="moreInfo">
                    <span>type:</span>
                    <p>{work.type}</p>
                  </div>
                </li>
                <hr />
              </Link>
            ))}
          </ul>
        </div>
        <div className="albumsList">
          <h3>Albums</h3>
          <ul className="albums">
            {reducedAlbumsList.map((album) => (
              <Link to="">
                <li>
                  <p>{album.title}</p>
                  <div className="moreInfo">
                    <span>Album/</span>
                    <span>Artist:</span>
                    <p>{album.artist}</p>
                    <span>Date</span>
                    <p>{album.date}</p>
                  </div>
                </li>
                <hr />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
