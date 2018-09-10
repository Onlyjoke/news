export const authInit = () => (dispatch) => {
    dispatch({
        type: 'AUTH_INIT'
    });
};

export const auth = (isAuth) => (dispatch) => {
    dispatch({
        type: 'AUTH_SUCCESS',
        payload: isAuth
    });
};
