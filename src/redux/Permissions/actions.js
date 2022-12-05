const actions = {
    Permissions_REQUEST: 'Permissions_REQUEST',
    Permissions_SUCCESS:'Permissions_SUCCESS',
    Permissions_ERROR: 'Permissions_ERROR',

    PermissionsRequest: (data) => ({
        type: actions.Permissions_REQUEST,
        payload: {data}
    }),


}

export default actions;
