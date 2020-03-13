import { NetworkClientType } from '../types/types';

export default class AuthenticationApi {
  networkClient: NetworkClientType;

  constructor(netClient: NetworkClientType) {
    this.networkClient = netClient;
  }

  getOptions = () => {
    return {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  };

  signupRequest = async (url: string, body: Object) => {
    const options = this.getOptions();
    const result = await this.networkClient.postRequest(url, body, options);

    return result;
  };

  loginRequest = async (url: string, body: Object) => {
    const options = this.getOptions();
    const result = await this.networkClient.postRequest(url, body, options);

    if (result.token) localStorage.setItem('token', result.token);

    return result;
  };
}
