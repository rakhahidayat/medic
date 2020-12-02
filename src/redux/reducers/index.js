import { combineReducers } from 'redux';
// import AuthReducer from '../screenActions/login/reducer';
// import HomeReducer from '../screenActions/home/reducer';
import LandingReducer from '../screenActions/landing/reducer';

const rootReducer = combineReducers({
  landing: LandingReducer,
});

export default (state, action) => (
  action.type === 'logout_session'
    ? rootReducer(undefined, action)
    : rootReducer(state, action)
);
