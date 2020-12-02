import INITIAL_STATE from './initial-state';
import { SET_REDIRECT } from './type';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_REDIRECT:
      return { ...state, redirect: action.payload }
    default:
      return state;
  }
};
