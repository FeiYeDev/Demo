import { openNotificationWithIcon } from "./utils/util";
import { jsforceResponse } from "@/config/httpService";
import { Connection } from "jsforce";
import _ from 'lodash'
import { store } from "@redux/store";
import authActions from '@redux/Auth/actions'
import { RequestAuthMeta } from "./api/authApi";


const readMessage = async (e) => {
  // console.log("readMessage0", e);
  if (e.data.session && e.isTrusted && e.data.type === 'Usermanagement') {
    // console.log("readMessage", e);
    if (e.data.platform === 'bubble') {
      return readMessageForBubble(e)
    } else {
      return readMessageForNormal(e)
    }

  }
}
const handlePermission = (permissions) => {
    if (!permissions) {
      openNotificationWithIcon("error", "Do not have permissions");
      return null;
    } else {
      const MM_permissions = permissions?.find((e) => {
        return (
          e?.moduleName === "Asset_Management" &&
          e?.pageName === "Asset_Management"
        );
      });
      return _.get(MM_permissions, "page");
    }
  };
const readMessageForNormal = async (e) => {
    console.log(e,'e');
  let token = e.data?.session;
  let instance_url = e.data?.instance_url;
  let entity = e.data?.entity;

  const devConfig = {
    accessToken: token,
    instanceUrl: instance_url,
    proxyUrl: process.env.NODE_ENV === 'development' ? process.env.REACT_APP_PROXY_INSTANCE : '',
  }
  const connectConfig = devConfig
  const connection = new Connection(connectConfig);
  let internalContactId = e.data?.internalcontactid;
  let contactId = e.data?.usercontactid;
  let user_result = [];

  if (internalContactId) {
    user_result = internalContactId;
  } else if (contactId) {
    user_result = contactId;
  } else {
    return openNotificationWithIcon("error", "Missing UserId or ContactId")
  }
  let result = await RequestAuthMeta(
    connection,
    entity,
    user_result,
    user_result
  );
  console.log('stepOne', result)
  const domain = _.get(result, "domain")
  console.log(result,'result');
  result = jsforceResponse(result, "", false, true);
  result = _.get(result, "result");
  // let initPermission = await getUserPermissions(result, domain);
  // let permissions = handlePermission(initPermission);
  let tokenData = {
    connection: connection,
    meta: result,
    domain: domain,
    instance_url: instance_url,
    contactid: internalContactId,
    // permissions: (permissions ?? '') !== '' ? permissions : null
  };

  store.dispatch(authActions.AuthMetaSuccess(tokenData))
  return result
}

const readMessageForBubble = async (e) => {
  console.log(e);
  let instance_url = e.data?.instance_url;
  let internalContactId = e.data?.internalContactId;
  let contactId = e.data?.usercontactid;
  let user_result = [];

  if (internalContactId) {
    user_result = internalContactId;
  } else if (contactId) {
    user_result = contactId;
  } else {
    return openNotificationWithIcon("error", "Missing UserId or ContactId")
  }
  const token = e.data?.session
  const domain = e.data?.server_url
  // let initPermission = await getUserPermissions(token, domain);
  // let permissions = handlePermission(initPermission);
  let tokenData = {
    meta: token,
    domain: domain,
    instance_url: instance_url,
    contactid: internalContactId,
    // permissions: (permissions ?? '') !== '' ? permissions : null
  };

  // // console.log("tokenData", result2, tokenData);
  store.dispatch(authActions.AuthMetaSuccess(tokenData))
  return true
}


const rootAuth = async () => {
  if (process.env.NODE_ENV === 'development') {
    const message = {
      isTrusted: true,
      data: {
        session: process.env.REACT_APP_TOKEN,
        instance_url: process.env.REACT_APP_INSTANCE,
        internalcontactid: '0038c00002lQanwAAC',
        server_url: process.env.REACT_APP_BACKEND_URL,
        type: 'Usermanagement',
        userId: '0038c00002lQanwAAC',
        platform: 'bubbleDev',

      }
    }
    return new Promise(async (resolve, reject) => {
      const result = await readMessage(message)
      console.log('stepTwo', result)
      if ((result ?? '') !== '') {
        resolve(true)
      } else {
        reject(false)
      }
    })

  }

  return new Promise((resolve, reject) => {
    const settimeout = setTimeout(() => {
      reject(false)
    }, 150000)
    window.postMessage({ isLoaded: true }, '*')
    const judgeStatus = async (e) => {
      const result = await readMessage(e)
      console.log('stepTwo', result, e)
      if ((result ?? '') !== '') {
        clearTimeout(settimeout)
        window.removeEventListener('message', judgeStatus)
        resolve(true)
      }
    }
    window.addEventListener('message', judgeStatus)
  })
}



export default rootAuth;
