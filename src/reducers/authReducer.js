export default (state = {}, action) => {
    switch (action.type) {
        case 'USER_DATA':
            return {
                user: action.payload,
                value: true
            }
        case 'USER_LOGOUT':
            return {
                user: {},
                value: false
            }
        default:
            return state;
    }
};