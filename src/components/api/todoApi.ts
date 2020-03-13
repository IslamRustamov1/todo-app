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
    const options = this.getOptions();
    const result = await this.networkClient.postRequest(url, body, options);

    return result.data;
  };

  getRequest = async (url: string, body: Object) => {
    const options = this.getOptions();
    const result = await this.networkClient.getRequest(url, body, options);

    return result.data;
  };

  putRequest = async (url: string, body: Object) => {
    const options = this.getOptions();
    const result = await this.networkClient.putRequest(url, body, options);
  };

  deleteRequest = async (url: string, body: Object) => {
    const options = this.getOptions();
    const result = await this.networkClient.deleteRequest(url, body, options);
  };
}
