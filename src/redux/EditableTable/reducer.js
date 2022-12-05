import actions from "./actions";

const initState = {
  isNewModalClosed: true,
  isImportModalClosed: true,
  load: false,
  drawer: false,
  id: null,
  AllAvailablePermissions: [],
  AllAvailablePermissionSets: [],
  AllAvailableUsers: [],
  AllAvailableModuleSecs: [],
  modalContact: false,
  userReload: false,
  accountId: null,
  saveContactStatus: false,
};

export default function ProjectReducer(state = initState, action) {
  switch (action.type) {
    case actions.CLOSE_NEW_MODAL_REQUEST:
      return {
        ...state,
        isNewModalClosed: action.payload.status,
      };
    case actions.CLOSE_IMPORT_MODAL_REQUEST:
      return {
        ...state,
        isImportModalClosed: action.payload.status,
      };

    case actions.AllAvailablePermissions_SUCCESS:
      return {
        ...state,
        AllAvailablePermissions: action.payload.data,
      };
    case actions.AllAvailablePermissionSets_SUCCESS:
      return {
        ...state,
        AllAvailablePermissionSets: action.payload.data,
      };

    case actions.AllAvailableUsers_SUCCESS:
      return {
        ...state,
        AllAvailableUsers: action.payload.data,
      };

    case actions.AllAvailableModuleSecs_SUCCESS:
      return {
        ...state,
        AllAvailableModuleSecs: action.payload.data,
      };
    case actions.OPEN_CONTACT:
      return {
        ...state,
        modalContact: action.payload.status,
      };
    case actions.HANDLE_RELOAD:
      return {
        ...state,
        userReload: action.payload.status,
      };
    case actions.ASSIGN_ID:
      return {
        ...state,
        accountId: action.payload.id,
      };
    case actions.SAVE_CONTACT_STATUS:
      return {
        ...state,
        saveContactStatus: action.payload.status,
      }
    default:
      return state;
  }
}
