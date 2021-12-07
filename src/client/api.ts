import axios, { AxiosInstance } from "axios";

class Api {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });
  }

  public async getArtistList(artistName: string) {
    // const formattedString = workName.replace(/\s/g, '+');
    try {
      const res = await this.instance.get(`/search/artist/${artistName}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  public async getWorkList(workName: string) {
    try {
      const res = await this.instance.get(`/search/work/${workName}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  public async getAlbumList(albumName: string) {
    try {
      const res = await this.instance.get(`/search/album/${albumName}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  public async getWorksByArtist(artistId: string) {
    try {
      const res = await this.instance.get(`/browser/${artistId}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Api("http://localhost:3333");
