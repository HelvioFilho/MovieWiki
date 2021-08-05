
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DataItemProps, StorageMovie } from "../../utils/interface";

export function useFavorites() {

  async function addFavorites(data: DataItemProps): Promise<StorageMovie | undefined> {
    let response;
    try {
      const storageData = await AsyncStorage.getItem('@movieWiki:favorites');
      const oldData = storageData ? (JSON.parse(storageData) as StorageMovie) : {};

      const newData = {
        [data.id]: {
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

  async function getFavorites(): Promise<StorageMovie | undefined> {
    let response;
    try {
      const storageData = await AsyncStorage.getItem('@movieWiki:favorites');
      const data = storageData ? (JSON.parse(storageData) as StorageMovie) : {};
      response = data;
    } catch (e) {
      response = {};
    } finally {
      return response;
    }
  }

  return {
    addFavorites: addFavorites,
    getFavorites: getFavorites,
  }
}