import axios from 'axios'
import { apiMap } from './apiMap'

interface APIConfig {
    type: string;
    data?: object;
}

export default function api (conf: APIConfig) {
  const { type, data } = conf
  const { url, method, headers } = apiMap[type]

  // TODO - how to append get params?
  return axios.request({
    url,
    method,
    headers,
    data
  })
}
