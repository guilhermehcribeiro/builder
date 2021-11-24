import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default interface IApiResponse<T> {
  data: T;
}

async function request(options: AxiosRequestConfig, address: boolean): Promise<AxiosResponse<any>> {
  const headers = { ...options.headers };

  try {
    const baseURL = address ? 'http://api.positionstack.com/v1/' : 'http://api.openweathermap.org/data/2.5';

    const result = await axios({
      ...options,
      ...options.params,
      baseURL,
      headers
    });

    return result;
  } catch (err) {
    return Promise.reject(err);
  }
}

export async function get<T = any>(url: string, params?: any, headers?: any, address = false): Promise<AxiosResponse<IApiResponse<T>>> {
  return await request({ url, method: 'GET', params, headers }, address);
}
