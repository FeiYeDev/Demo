const actions = {
  CLOSE_NEW_MODAL_REQUEST: "CLOSE_NEW_MODAL_REQUEST",

  CloseModalRequest: (status) => ({
    type: actions.CLOSE_NEW_MODAL_REQUEST,
    payload: { status },
  }),

  CLOSE_IMPORT_MODAL_REQUEST: "CLOSE_IMPORT_MODAL_REQUEST",

  CloseImportModal: (status) => ({
    type: actions.CLOSE_IMPORT_MODAL_REQUEST,
    payload: { status },
  }),

  AllAvailablePermissions_REQUEST: "AllAvailablePermissions_REQUEST",
  AllAvailablePermissionsRequest: () => ({
    type: actions.AllAvailablePermissions_REQUEST,
    payload: {},
  }),

  AllAvailablePermissions_SUCCESS: "AllAvailablePermissions_SUCCESS",
  AllAvailablePermissionsSuccess: (data) => ({
    type: actions.AllAvailablePermissions_SUCCESS,
    payload: { data },
  }),

  AllAvailablePermissionSets_REQUEST: "AllAvailablePermissionSets_REQUEST",
  AllAvailablePermissionSetsRequest: () => ({
    type: actions.AllAvailablePermissionSets_REQUEST,
    payload: {},
  }),

  AllAvailablePermissionSets_SUCCESS: "AllAvailablePermissionSets_SUCCESS",
  AllAvailablePermissionSetsSuccess: (data) => ({
    type: actions.AllAvailablePermissionSets_SUCCESS,
    payload: { data },
  }),

  AllAvailableUsers_REQUEST: "AllAvailableUsers_REQUEST",
  AllAvailableUsersRequest: () => ({
    type: actions.AllAvailableUsers_REQUEST,
    payload: {},
  }),

  AllAvailableUsers_SUCCESS: "AllAvailableUsers_SUCCESS",
  AllAvailableUsersSuccess: (data) => ({
    type: actions.AllAvailableUsers_SUCCESS,
    payload: { data },
  }),

  AllAvailableModuleSecs_REQUEST: "AllAvailableModuleSecs_REQUEST",
  AllAvailableModuleSecsRequest: () => ({
    type: actions.AllAvailableModuleSecs_REQUEST,
    payload: {},
  }),

  AllAvailableModuleSecs_SUCCESS: "AllAvailableModuleSecs_SUCCESS",
  AllAvailableModuleSecsSuccess: (data) => ({
    type: actions.AllAvailableModuleSecs_SUCCESS,
    payload: { data },
  }),

  OPEN_CONTACT: "OPEN_CONTACT",
  OpenContact: (status) => ({
    type: actions.OPEN_CONTACT,
    payload: { status },
  }),
  SAVE_CONTACT_STATUS: 'SAVE_CONTACT_STATUS',
  SaveContactStatus: (status) => ({
    type: actions.SAVE_CONTACT_STATUS,
    payload: { status },
  }),
  HANDLE_RELOAD: "HANDLE_RELOAD",
  HandleReload: (status) => ({
    type: actions.HANDLE_RELOAD,
    payload: { status },
  }),
  ASSIGN_ID: "ASSIGN_ID",
  AssignId: (id) => ({
    type: actions.ASSIGN_ID,
    payload: { id },
  }),
};
export default actions;
