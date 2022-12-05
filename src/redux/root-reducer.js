import {combineReducers} from 'redux';
import Auth from "@redux/Auth/reducer";
import EditableTable from "@redux/EditableTable/reducer";
import Users from "@redux/Users/reducer";
import Permissions from "@redux/Permissions/reducer";
import PermissionSets from "@redux/PermissionSets/reducer";
import UsersGroup from "@redux/UsersGroup/reducer";
import CustomConfig from "@redux/CustomConfig/reducer";

const rootReducer = combineReducers({
    Auth,
    EditableTable,
    Users,
    Permissions,
    PermissionSets,
    UsersGroup,
    CustomConfig
});

export default rootReducer;
