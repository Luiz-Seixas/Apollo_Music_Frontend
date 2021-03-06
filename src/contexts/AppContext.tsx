import { useState, createContext, ReactNode } from "react";
import api from "../client/api";
import {
  IAppContextData,
  IArtist,
  IWork,
  IAlbum,
  WorkResponse,
} from "../interfaces/response";

export const AppContext = createContext({} as IAppContextData);

type IAppProvider = {
  children: ReactNode;
};

export function AppProvider(props: IAppProvider) {
  const [search, setSearch] = useState("");
  const [artists, setArtists] = useState<IArtist[]>([]);
  const [works, setWorks] = useState<IWork[]>([]);
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [worksByArtist, setWorksByArtist] = useState<WorkResponse[]>([]);

  async function searchData(params: string) {
    // event.preventDefault();
    setSearch(params);
    // formatando a string o primeiro retira os espaços e troca por + e o segundo replace retira os caracteres especiais como ~
    const formattedString = search
      .replace(/\s/g, "+")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const resArtist: IArtist[] = await api.getArtistList(formattedString);

    setArtists(resArtist);

    const resWork: IWork[] = await api.getWorkList(formattedString);

    setWorks(resWork);

    const resAlbum: IAlbum[] = await api.getAlbumList(formattedString);

    setAlbums(resAlbum);
  }

  async function searchWorksByArtist(params: string) {
    const resWorks: WorkResponse[] = await api.getWorksByArtist(params);

    setWorksByArtist(resWorks);
  }

  return (
    // props.childre é tudo o que coloca dentro do componente
    <AppContext.Provider
      value={{
        searchData,
        searchWorksByArtist,
        setSearch,
        worksByArtist,
        search,
        artists,
        works,
        albums,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
