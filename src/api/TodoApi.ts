import { NetworkClientType } from '../types/types';

export default class TodoApi {
  networkClient: NetworkClientType;

  constructor(netClient: NetworkClientType) {
    this.networkClient = netClient;
  }

  createTodo = async (url: string, body: Object, headers: Object) => {
    const result = await this.networkClient.postRequest(url, body, headers);

    return result.data;
  };

  getTodo = async (url: string, body: Object, headers: Object) => {
    const result = await this.networkClient.getRequest(url, body, headers);

    return result.data;
  };

  editTodo = async (url: string, body: Object, headers: Object) => {
    const result = await this.networkClient.putRequest(url, body, headers);
  };

  deleteTodo = async (url: string, body: Object, headers: Object) => {
    const result = await this.networkClient.deleteRequest(url, body, headers);
  };
}
