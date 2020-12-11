import { Method as AxiosMethod } from 'axios'

interface APIItem {
    url: string;
    method: AxiosMethod;
    headers?: object;
}

export const apiMap: { [key: string]: APIItem } = {
  getLostPets: {
    url: 'http://localhost:5000/pets',
    method: 'GET'
  }
}
