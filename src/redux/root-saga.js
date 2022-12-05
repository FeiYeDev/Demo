import {all} from 'redux-saga/effects';
import AllAvailableDataSage from "@redux/EditableTable/saga";

export default function* rootSaga(getState) {
    yield all([
        AllAvailableDataSage()
    ]);
}
