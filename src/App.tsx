import React, { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

import "./styles/home.css";
// import { ArtistResponse } from "./interfaces/response";

function App() {
  const { artists, works, albums, search, searchData, setSearch } =
    useContext(AppContext);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div className="content">
        <form onSubmit={searchData}>
          <input
            type="text"
            placeholder="Artist or Music"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <div className="artistList">
          <div className="artists">
            {artists.map((artist) => (
              <div>
                <h5>Artists</h5>
                {artist.name}
              </div>
            ))}
          </div>
          <div className="works">
            {works.map((work) => (
              <div>
                <h5>Works</h5>
                {work.title}
                <p>type:</p>
                {work.type}
              </div>
            ))}
          </div>
          <div className="albums">
            {albums.map((album) => (
              <div>
                <h5>Album</h5>
                {album.title}
                <strong>Artist</strong>
                {album.artist}
                <strong>Date</strong>
                {album.date}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
