// import AsyncStorage from '@react-native-community/async-storage';
// import {
//   LOGIN_USER_FAIL,
//   LOGIN_USER,
//   LOGOUT_SESSION,
//   LOGIN_USER_REQUIRED,
// } from '../login/type';
// import { postLogin } from '../../../services/index';
// import * as token from '../../../config/token';


// export const logoutSession = () => (dispatch) => {
//   AsyncStorage.removeItem('token');
//   AsyncStorage.removeItem('data');
//   AsyncStorage.removeItem('device');
//   dispatch({ type: LOGOUT_SESSION, payload: '' });
// };

// export const loginSession = () => async (dispatch) => {
//   dispatch({ type: LOGIN_USER });
//   const dataUser = await token.getUser();
//   postLogin(dataUser)
//     .then((user) => {
//       token.setDataSession(user.data);
//       token.setToken(user.data.tokenResponse.accessToken);
//       dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
//     })
//     .catch((err) => {
//       const error = `${err.message}`;
//       if (error.includes('status code 400') || error.includes('status code 401')) {
//         er = 'Username or Password is Invalid.';
//       } else if (error.includes('status code 500') || error.includes('status code 502') || error.includes('status code 503')) {
//         er = 'Sorry, Service Under Maintenance, Please try again later';
//       } else if (error.includes('Network Error')) {
//         er = 'Please check your Internet connection.';
//       } else {
//         er = error;
//       }
//       dispatch({ type: LOGIN_USER_FAIL, payload: er });
//     });
//   dispatch({ type: LOGIN_USER_REQUIRED });
// };
