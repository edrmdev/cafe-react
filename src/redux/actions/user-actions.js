export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const logOut = () => ({
    type: LOGOUT_SUCCESS
});

export const logIn = ( User, token ) => ({
    type: 'LOGIN_SUCCESS',
    payload: User,
    token,
});