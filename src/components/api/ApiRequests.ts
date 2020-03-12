import { RequestOptionsType } from '../types/types';

export default class ApiRequests {
  postRequest = async (
    url: string,
    body: Object,
    options: RequestOptionsType,
  ) => {
    const post = Object.assign(
      {
        method: 'POST',
      },
      body,
      options,
    );

    const response = await fetch(url, post);

    const data = await response.json();

    return data;
  };

  getRequest = async (
    url: string,
    body: Object,
    options: RequestOptionsType,
  ) => {
    const get = Object.assign(
      {
        method: 'GET',
      },
      body,
      options,
    );
    console.log(get);
    const response = await fetch(url, get);

    const data = await response.json();

    return data;
  };

  putRequest = async (
    url: string,
    req: RequestInit,
    options: RequestOptionsType,
  ) => {
    if (options) {
      req.headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + options.token,
      };
    }

    const response = await fetch(url, req);

    const data = await response.json();

    return data;
  };

  deleteRequest = async (
    url: string,
    req: RequestInit,
    options: RequestOptionsType,
  ) => {
    if (options) {
      req.headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + options.token,
      };
    }

    const response = await fetch(url, req);

    const data = await response.json();

    return data;
  };
}
