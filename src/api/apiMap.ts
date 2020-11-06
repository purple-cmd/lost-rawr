import { Method as AxiosMethod } from 'axios'

interface APIItem {
    url: string;
    method: AxiosMethod;
    headers: object;
}

export const apiMap: { [key: string]: APIItem } = {
  getLostPets: {
    url: 'https://my.api.mockaroo.com/lost_pets.json',
    method: 'GET',
    headers: {
      'X-API-Key': 'd173f570'
    }
  }
}
