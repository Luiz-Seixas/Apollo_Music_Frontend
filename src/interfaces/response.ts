export interface IAppContextData {
  searchData: (params: string) => Promise<void>;
  setSearch: (search: string) => any;
  artists: IArtist[];
  works: IWork[];
  albums: IAlbum[];
  search: string;
}

export interface IArtist {
  name: string;
  type: string;
  id: string;
}

export interface IWork {
  title: string;
  type: string;
  id: string;
  relations: IRelation[];
}

export interface IRelation {
  type: string;
  artist: IArtist;
}

export interface IAlbum {
  title: string;
  id: string;
  artist: IArtist[];
  date: string;
}
