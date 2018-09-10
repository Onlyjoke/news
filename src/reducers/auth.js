export default function auth(state = {}, action) {
    if (action.type === 'AUTH_INIT') {
        return {
            login: false
        };
    }

    if (action.type === 'AUTH_SUCCESS') {
        const isAuth = action.payload;

        return {
            login: isAuth
        };
    }

    return state;
}
