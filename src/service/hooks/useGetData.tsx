import { DataItemProps } from "../../utils/interface";
import { api } from "../api";


export function useGetData() {

  async function getMovies(): Promise<DataItemProps[]> {
    let data;
    try {
      const response = await api.get('/films');
      data = response.data;
    } catch (e) {
      data = [];
    } finally {
      return data as DataItemProps[];
    }
  }

  async function getCharacters(): Promise<DataItemProps[]> {
    let data;
    try {
      const response = await api.get('/characters');
      data = response.data;
    } catch (e) {
      data = [];
    } finally {
      return data as DataItemProps[];
    }
  }

  return {
    getMovies: getMovies,
    getCharacters: getCharacters,
  }
}