import AuthenticationApi from './AuthenticationApi';
import { NetworkClientType } from '../types/types';
import { RequestOptionsType } from '../types/types';

export default class TodoApi {
  networkClient: NetworkClientType;

  constructor(netClient: NetworkClientType) {
    this.networkClient = netClient;
  }

  // postRequest = async (url: string, body: Object) => {
  //   const result = await this.networkClient.postRequest(url, body, {
  //     token: this.user.token,
  //   });
  //   console.log(result);
  // };

  getRequest = async (url: string, body: Object) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    const result = await this.networkClient.getRequest(url, body, options);
    console.log(result);
  };

  putRequest = async (
    url: string,
    body: Object,
    options: RequestOptionsType,
  ) => {
    const result = await this.networkClient.postRequest(url, body);
    console.log(result);
  };

  deleteRequest = async (
    url: string,
    body: Object,
    options: RequestOptionsType,
  ) => {
    const result = await this.networkClient.postRequest(url, body);
    console.log(result);
  };
}
