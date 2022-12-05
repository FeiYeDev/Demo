import actions from './actions';

const initState = {
    data: [],
};

export default function PermissionsReducer(state = initState, action) {
    switch (action.type) {
        case actions.Permissions_REQUEST:
            return {
                ...state,
                data: action.payload.data
            };
        default:
            return state;
    }
}
