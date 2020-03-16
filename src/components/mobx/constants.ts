import TodoApi from '../../api/TodoApi';
import ApiRequests from '../../api/ApiRequests';
import AuthenticationApi from '../../api/AuthenticationApi';

export const ITEM_STORE = 'ITEM_STORE';
export const FILTER_STORE = 'FILTER_STORE';

export const apiReqs = new ApiRequests();
export const user = new AuthenticationApi(apiReqs);
export const todo = new TodoApi(apiReqs);
export const appURL = 'https://mysterious-savannah-44011.herokuapp.com/';
