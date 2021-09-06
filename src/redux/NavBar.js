import { switchNavBar } from './action';

const navBarIndex = {
  navBarIndex: 0,
};

export function numReducer(state = navBarIndex, action) {
  switch (action.type) {
    case switchNavBar:
      return {
        navBarIndex: action.index,
      };
    default:
      return state;
  }
}
