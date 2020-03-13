import { RequestOptionsType } from '../types/types';

export default class ApiRequests {
  buildRequest = (method: string, body: Object, options: Object) => {
    return Object.assign({ method: method }, body, options);
  };

  postRequest = async (
    url: string,
    body: Object,
    options: RequestOptionsType,
  ) => {
    const response = await fetch(url, this.buildRequest('POST', body, options));
    const data = await response.json();

    return data;
  };

  getRequest = async (
    url: string,
    body: Object,
    options: RequestOptionsType,
  ) => {
    const response = await fetch(url, this.buildRequest('GET', body, options));
    const data = await response.json();

    return data;
  };

  putRequest = async (
    url: string,
    body: Object,
    options: RequestOptionsType,
  ) => {
    const response = await fetch(url, this.buildRequest('PUT', body, options));
    const data = await response.json();

    return data;
  };

  deleteRequest = async (
    url: string,
    body: Object,
    options: RequestOptionsType,
  ) => {
    const response = await fetch(
      url,
      this.buildRequest('DELETE', body, options),
    );
    const data = await response.json();

    return data;
  };
}
