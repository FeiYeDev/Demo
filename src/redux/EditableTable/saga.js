import { all, call, put, takeEvery } from "redux-saga/effects";
import actions from "./actions";
import { jsforceResponse } from "@/config/httpService";
import {
  getAvailableModuleSecs,
  getAvailablePermissions,
  getAvailablePermissionSets,
  getAvailableUsers,
} from "@redux/API";

export function* getAllAvailablePermissions() {
  let result = yield call(getAvailablePermissions);
  result = jsforceResponse(result, "", false, true);

  yield put(actions.AllAvailablePermissionsSuccess(result.data));
}

export function* getAllAvailablePermissionSets() {
  let result = yield call(getAvailablePermissionSets);
  result = jsforceResponse(result, "", false, true);

  yield put(actions.AllAvailablePermissionSetsSuccess(result.data));
}

export function* getAllAvailableUsers() {
  let result = yield call(getAvailableUsers);
  result = jsforceResponse(result, "", false, true);

  yield put(actions.AllAvailableUsersSuccess(result.data));
}

export function* getAllAvailableModuleSecs() {
  let result = yield call(getAvailableModuleSecs);
  result = jsforceResponse(result, "", false, true);

  yield put(actions.AllAvailableModuleSecsSuccess(result.data));
}

export function* watchGetAllAvailableData() {
  yield takeEvery(
    actions.AllAvailablePermissions_REQUEST,
    getAllAvailablePermissions
  );
  yield takeEvery(
    actions.AllAvailablePermissionSets_REQUEST,
    getAllAvailablePermissionSets
  );
  yield takeEvery(actions.AllAvailableUsers_REQUEST, getAllAvailableUsers);
  yield takeEvery(
    actions.AllAvailableModuleSecs_REQUEST,
    getAllAvailableModuleSecs
  );
}

export default function* AllAvailableDataSage() {
  yield all([watchGetAllAvailableData()]);
}
