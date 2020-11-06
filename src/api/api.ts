import axios, { AxiosResponse } from 'axios'
import { apiMap } from './apiMap'
import useLoading from './useLoading'

interface APIConfig {
  type: string;
  data?: object;
  disableBI?: boolean;
}

const loading = useLoading();

export default function api(conf: APIConfig): Promise<AxiosResponse> {
  const { type, data } = conf
  const { url, method, headers } = apiMap[type]

  async function fetchAPI(): Promise<AxiosResponse> {
    loading.increment();
    const res = await axios.request({
      url,
      method,
      headers,
      data
    });
    loading.decrement();

    return res;
  }

  // TODO - how to append get params?
  return fetchAPI();
}

