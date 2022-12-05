import actions from "./actions";
import _ from "lodash";
import { usersGroupconfig } from './config'
const initState = {
  usersGroupconfig
};

export default function CustomConfig(state = initState, action) {
  switch (action.type) {
    case actions.SET_USERSGROUP_CONFIG:
      return {
        ...state,
        usersGroupconfig: {
          primaryColor:  _.get(action.payload.data, 'primaryColor') || _.get(usersGroupconfig, 'primaryColor'),
          buttonColor:  _.get(action.payload.data, 'buttonColor') || _.get(usersGroupconfig, 'buttonColor'),
          buttonRadius: _.get(action.payload.data, 'buttonRadius') || _.get(usersGroupconfig, 'buttonRadius'),
          fontFamily:  _.get(action.payload.data, 'fontFamily') || _.get(usersGroupconfig, 'fontFamily'),
          cardIcon:  _.get(action.payload.data, 'cardIcon') || _.get(usersGroupconfig, 'cardIcon'),
        },
      };
    default:
      return state;
  }
}
