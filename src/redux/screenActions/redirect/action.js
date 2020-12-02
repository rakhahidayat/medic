import { SET_REDIRECT } from './type';

export const setRedirect = (payload) => ({
    type: SET_REDIRECT,
    payload: payload,
});