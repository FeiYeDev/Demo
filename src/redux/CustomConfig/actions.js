const actions = {
  SET_USERSGROUP_CONFIG: 'SET_USERSGROUP_CONFIG',
  setUsersGroupConfig: (data) => ({
    type: actions.SET_USERSGROUP_CONFIG,
    payload: {data}
}),
}

export default actions;
