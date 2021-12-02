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
}

export default new Api("http://localhost:3333");
