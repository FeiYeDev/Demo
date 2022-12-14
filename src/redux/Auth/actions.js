const actions = {
    Auth_REQUEST: 'Auth_REQUEST',
    Auth_ERROR: 'Auth_ERROR',
    Selected_Tab: 'Selected_Tab',
    Auth_Meta_Success: 'Auth_Meta_Success',
    RecordType_SUCCESS: 'RecordType_SUCCESS',
    SELECTED_CURRENT_USER: 'SELECTED_CURRENT_USER',
    PERMISSIONS: 'PERMISSIONS',

    AuthRequest: (connection, entity, instance_url, contactid, userid) => ({
        type: actions.Auth_REQUEST,
        payload: {connection, entity, instance_url, contactid, userid}
    }),
    SetConnection: (connection) => ({
        type: actions.Auth_REQUEST,
        payload: {connection}
    }),
    AuthError: (error) => ({
        type: actions.Auth_ERROR,
        payload: {error}
    }),
    SelectedTab: (tab) => ({
        type: actions.Selected_Tab,
        payload: {tab}
    }),
    AuthMetaSuccess: (data) => ({
        type: actions.Auth_Meta_Success,
        payload: {data}
    }),
    RecordTypeSuccess: (data) => ({
        type: actions.RecordType_SUCCESS,
        payload: {data}
    }),
    SelectedCurrentUser: (record) => ({
        type: actions.SELECTED_CURRENT_USER,
        payload: {record}
    }),
    Permissions: (record) => ({
        type: actions.PERMISSIONS,
        payload: {record}
    }),
    USER_CONTACT_ID: 'USER_CONTACT_ID',
    UserContactId: (record) => ({
        type: actions.USER_CONTACT_ID,
        payload: {record}
    })

}

export default actions;
