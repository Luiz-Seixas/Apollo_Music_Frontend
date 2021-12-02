import React, { FormEvent, useEffect, useState } from "react";
import api from "./client/api";

import "./styles/home.css";
import { ArtistResponse } from "./interfaces/response";

function App() {
  const [search, setSearch] = useState("");
  const [artists, setArtists] = useState<ArtistResponse[]>([]);

  async function getArtist(event: FormEvent) {
    event.preventDefault();

    // formatando a string o primeiro retira os espaços e troca por + e o segundo replace retira os caracteres especiais como ~
    const formattedString = search
      .replace(/\s/g, "+")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const res: ArtistResponse[] = await api.getArtistList(formattedString);

    setArtists(res);
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div className="content">
        <form onSubmit={getArtist}>
          <input
            type="text"
            placeholder="Artist or Music"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <div className="artistList">
          {artists.map((artist) => (
            <div>{artist.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
