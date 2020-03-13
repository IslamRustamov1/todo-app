import { NetworkClientType } from '../types/types';

export default class TodoApi {
  networkClient: NetworkClientType;

  constructor(netClient: NetworkClientType) {
    this.networkClient = netClient;
  }

  getOptions = () => {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
  };

  postRequest = async (url: string, body: Object) => {
    const result = await this.networkClient.postRequest(
      url,
      body,
      this.getOptions(),
    );

    return result.data;
  };

  getRequest = async (url: string, body: Object) => {
    const result = await this.networkClient.getRequest(
      url,
      body,
      this.getOptions(),
    );

    return result.data;
  };

  putRequest = async (url: string, body: Object) => {
    const result = await this.networkClient.putRequest(
      url,
      body,
      this.getOptions(),
    );
  };

  deleteRequest = async (url: string, body: Object) => {
    const result = await this.networkClient.deleteRequest(
      url,
      body,
      this.getOptions(),
    );
  };
}
