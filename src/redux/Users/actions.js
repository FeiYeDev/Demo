const actions = {
    Users_REQUEST: 'Users_REQUEST',
    Users_SUCCESS:'Users_SUCCESS',
    Users_ERROR: 'Users_ERROR',

    UsersRequest: (data) => ({
        type: actions.Users_REQUEST,
        payload: {data}
    }),


}

export default actions;
