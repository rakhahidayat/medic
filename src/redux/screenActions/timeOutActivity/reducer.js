import INITIAL_STATE from './initial-state';
import { ROUTE_CHANGES } from './type';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ROUTE_CHANGES:
      return { ...state, currentRoute: action.payload }
    default:
      return state;
  }
};
