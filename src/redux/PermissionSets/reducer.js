import actions from './actions';

const initState = {
    data: [],
};

export default function PermissionSetsReducer(state = initState, action) {
    switch (action.type) {
        case actions.PermissionSets_REQUEST:
            return {
                ...state,
                data: action.payload.data
            };

        default:
            return state;
    }
}
