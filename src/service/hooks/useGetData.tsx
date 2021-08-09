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

  async function getSearchResult(query: string): Promise<DataItemProps[]> {
    let data;
    try {
      const response = await api.get('/search',
        {
          params: {
            query: query,
          },
        });
      data = response.data;
    } catch (e) {
      data = [];
    } finally {
      return data;
    }
  }

  return {
    getMovies: getMovies,
    getCharacters: getCharacters,
    getSearchResult: getSearchResult,
  }
}