import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

import "../styles/artist.css";
import "../components/header/header.css";
import { Header } from "../components/header/Header";

export function Artist() {
  const { searchWorksByArtist, worksByArtist } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    if (id) searchWorksByArtist(id);
  }, []);

  console.log(worksByArtist);

  return (
    <div id="artistPage">
      <Header />
      <div className="ArtistInfo"></div>
      <div className="worksContent">
        <h2>Musics</h2>
        <ul className="worksList">
          {worksByArtist.map((work) => {
            return (
              <li>
                <span>{work}</span>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
