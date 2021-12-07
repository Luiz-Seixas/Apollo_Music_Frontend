import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

import "../styles/artist.css";

export function Artist() {
  const { searchWorksByArtist, worksByArtist } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    if (id) searchWorksByArtist(id);
  }, []);

  console.log(worksByArtist);

  return (
    <div id="page">
      {worksByArtist.map((work) => {
        return (
          <div className="worksContent">
            <ul className="worksList">
              <li>
                <span>{work}</span>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
