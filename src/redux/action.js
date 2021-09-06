export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SWITCH_NAVBAR = 'SWITCH_NAVBAR';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const login = (userInfo) => ({ type: LOGIN, userInfo: userInfo });
export const logout = () => ({ type: LOGOUT });
export const switchNavBar = (index) => ({ type: SWITCH_NAVBAR, currNavIndex: index });
