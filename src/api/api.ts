import axios, { AxiosResponse } from 'axios'
import { apiMap } from './apiMap'
import useLoading from './useLoading'

interface APIConfig {
  type: string;
  data?: object;
  params?: object;
  disableBI?: boolean;
}

const loading = useLoading()

export default function api (conf: APIConfig): Promise<AxiosResponse> {
  const { type, data, params } = conf
  const { url, method, headers } = apiMap[type]

  async function fetchAPI (): Promise<AxiosResponse> {
    loading.increment()
    const res = await axios.request({
      url,
      method,
      headers,
      data,
      params // for GET
    })
    loading.decrement()

    return res
  }

  return fetchAPI()
}
