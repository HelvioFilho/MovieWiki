
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DataItemProps, StorageMovie } from "../../utils/interface";

export function useFavorites() {

  async function addFavorites(data: DataItemProps): Promise<StorageMovie> {
    let response = {};
    try {
      const storageData = await AsyncStorage.getItem('@movieWiki:favorites');
      const oldData = storageData ? (JSON.parse(storageData) as StorageMovie) : {};

      const newData = {
        [`${data.id}${data.title}`]: {
          data: data
        }
      }
      response = {
        ...newData,
        ...oldData
      }
      await AsyncStorage.setItem('@movieWiki:favorites', JSON.stringify(response));

    } catch (e) {
      response = {};
    } finally {
      return response;
    }
  }

  async function getFavorites(): Promise<DataItemProps[]> {
    let response = {} as DataItemProps[];
    try {
      const storageData = await AsyncStorage.getItem('@movieWiki:favorites');
      const data = storageData ? (JSON.parse(storageData) as StorageMovie) : {};
      response = Object
        .keys(data)
        .map((item) => {
          return {
            ...data[item].data,
          }
        });
    } catch (e) {
      response = {} as DataItemProps[];
    } finally {
      return response;
    }
  }

  async function removeFavorite(id: string): Promise<string> {
    let response = '';
    try {
      const storageData = await AsyncStorage.getItem('@movieWiki:favorites');
      const data = storageData ? (JSON.parse(storageData) as StorageMovie) : {};
      delete data[id];
      await AsyncStorage.setItem(
        '@movieWiki:favorites',
        JSON.stringify(data)
      )
      response = "Apagado com sucesso!";
    } catch (e) {
      response = "Algo deu errado!";
    } finally {
      return response;
    }
  }

  return {
    addFavorites: addFavorites,
    getFavorites: getFavorites,
    removeFavorite: removeFavorite,
  }
}