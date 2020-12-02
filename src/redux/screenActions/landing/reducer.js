// import {
//     LOGOUT_SESSION,
//     LOGIN_USER_SUCCESS,
//     LOGIN_USER_FAIL,
//     LOGIN_USER,
//   } from '../login/type';
  import INITIAL_STATE from './initial-state';
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      // case LOGOUT_SESSION:
      //   return { ...state, status: true };
      // case LOGIN_USER_SUCCESS:
      //   return {
      //     ...state,
      //     loading: false,
      //     success: action.payload,
      //     error: 'SUCCESS',
      //   };
      // case LOGIN_USER_FAIL:
      //   return { ...state, error: action.payload, loading: false };
      // case LOGIN_USER:
      //   return { ...state, loading: true, error: '' };
      default:
        return state;
    }
  };
  