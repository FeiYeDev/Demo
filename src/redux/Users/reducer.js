import actions from './actions';

const initState = {
    data: [],
};

export default function UsersReducer(state = initState, action) {
    switch (action.type) {
        case actions.Users_REQUEST:
            return {
                ...state,
                data: action.payload.data
            };
        default:
            return state;
    }
}
