import { LOGIN, LOGOUT } from './action';

const initialLoginState = {
  loginStatus: false,
  userData: {
    userName: '',
    auth: '',
    id: '',
  },
};

export function loginStatusReducer(state = initialLoginState, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('userName', action.userInfo.username);
      localStorage.setItem('auth', action.userInfo.auth);
      return {
        loginStatus: true,
        userData: {
          userName: action.userInfo.username,
          auth: action.userInfo.auth,
        },
      };
    case LOGOUT:
      localStorage.removeItem('userName');
      localStorage.removeItem('auth');
      return {
        loginStatus: false,
        userData: {
          userName: '',
          id: '',
        },
      };
    default:
      return state;
  }
}
