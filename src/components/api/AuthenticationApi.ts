import ApiRequests from './ApiRequests';
import { NetworkClientType } from '../types/types';

export default class AuthenticationApi {
  networkClient: NetworkClientType;

  constructor(netClient: NetworkClientType) {
    this.networkClient = netClient;
  }

  signupRequest = async (url: string, body: Object) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const result = await this.networkClient.postRequest(url, body, options);
    console.log(result);
  };

  loginRequest = async (url: string, body: Object) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const result = await this.networkClient.postRequest(url, body, options);
    console.log(result);
    localStorage.setItem('token', result.token);
  };
}
