import axios, { AxiosResponse } from 'axios';
import { Wine, ArrOfWines } from '../types/wine';

export class Requests {
  static async requestWines(): Promise<AxiosResponse<ArrOfWines>> {
    const getWines = await axios.get("https://wine-back-test.herokuapp.com/products?page=1&limit=9")
    return getWines;
  }
}