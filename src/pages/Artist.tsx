import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

import "../styles/artist.css";
import "../components/header/header.css";
import { Header } from "../components/header/Header";
import { EmptyResponsePage } from "../components/emptyResponsePage/EmptyResponse";

export function Artist() {
  const { searchWorksByArtist, worksByArtist } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    if (id) searchWorksByArtist(id);
  }, []);

  console.log(worksByArtist);

  return (
    <>
      <div id="artistPage">
        <Header />
        <div className="worksContent">
          <ul className="worksList">
            {worksByArtist.length > 0 ? (
              // <h2>Musics</h2>
              worksByArtist.map((work) => {
                return (
                  <>
                    <li>
                      <span>{work}</span>
                      <hr />
                    </li>
                  </>
                );
              })
            ) : (
              <EmptyResponsePage />
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
