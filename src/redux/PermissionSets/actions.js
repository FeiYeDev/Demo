const actions = {
    PermissionSets_REQUEST: 'PermissionSets_REQUEST',
    PermissionSets_SUCCESS:'PermissionSets_SUCCESS',
    PermissionSets_ERROR: 'PermissionSets_ERROR',

    PermissionSetsRequest: (data) => ({
        type: actions.PermissionSets_REQUEST,
        payload: {data}
    }),


}

export default actions;
