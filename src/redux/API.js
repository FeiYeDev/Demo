import axios from "axios";
import { store } from "@redux/store";
import _ from "lodash";
import { openNotificationWithIcon } from "@components/help";
import createInstance from '@/utils/axios'

export const getPermissionSets = async (params) => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/permission-sets`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: params,
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const getPermissionSetsDetails = async (id) => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/permission-sets/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: {},
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const addPermissionSets = async (params) => {
  try {
    const result = await axios.post(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/permission-sets`,
      { ...params },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const updatePermissionSets = async (params, psId) => {
  try {
    const result = await axios.put(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/permission-sets/${psId}`,
      { ...params },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const updatePermissionSetsPermission = async (params, psId) => {
  try {
    const result = await axios.put(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/permission-sets/${psId}/relations`,
      params,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const updatePermissionSetsUser = async (params, psId) => {
  try {
    const result = await axios.put(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/permission-sets/${psId}/users`,
      params,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const deletePermissionSet = async (id) => {
  try {
    const result = await axios.delete(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/permission-sets/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    let code = _.get(result, "data.code");

    if (code >= 300) {
      return openNotificationWithIcon(
        "error",
        "failed",
        _.get(result, "data.errorMessage")
      );
    } else {
      return openNotificationWithIcon("success", "Record delete Success");
    }
  } catch (e) {
    return e;
  }
};

//Permissions

export const getPermissions = async (params) => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/permissions`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: params,
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const getPermissionsDetails = async (sfContactId) => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/${sfContactId}/permissions`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: {},
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const addPermission = async (params) => {
  try {
    const result = await axios.post(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/permissions`,
      { ...params },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const updatePermission = async (params, permissionId) => {
  try {
    const result = await axios.patch(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/permissions/${permissionId}`,
      { ...params },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const deletePermission = async (id) => {
  try {
    const result = await axios.delete(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/permissions/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    let code = _.get(result, "data.code");

    if (code >= 300) {
      return openNotificationWithIcon(
        "error",
        _.get(result, "data.errorMessage")
      );
    } else {
      return openNotificationWithIcon("success", "Record delete Success");
    }
  } catch (e) {
    return e;
  }
};

//Users

export const getUsers = async (params) => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain + `/api/v1/services/company/users`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: params,
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};
export const getUserDetails = async (userId) => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain + `/api/v1/services/company/users/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: {},
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const addUser = async (params) => {
  try {
    const result = await axios.post(
      store.getState().Auth.domain + `/api/v1/services/company/users`,
      { ...params },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

// export const deleteUser = async (id) => {
//   try {
//     const result = await axios.delete(
//         store.getState().Auth.domain +
//         `/api/v1/services/company/users/${id}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + store.getState().Auth.meta,
//           },
//         }
//     );
//     console.log('delete', result)
//     let code = _.get(result, "data.code");
//
//     if (code >= 300) {
//       return openNotificationWithIcon("error", _.get(result, "errorMessage"));
//     } else {
//       return openNotificationWithIcon("success", 'Record delete Success');
//     }
//   } catch (e) {
//     return e;
//   }
//
// };

export const getUserPermissionSets = async (contactId) => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/${contactId}/permission-sets`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: {},
      }
    );

    let code = _.get(result, "data.code");

    if (code >= 300) {
      return openNotificationWithIcon(
        "error",
        _.get(result, "data.errorMessage")
      );
    } else {
      let data = _.get(result, "data.data");
      return data;
    }
  } catch (e) {
    return e;
  }
};

export const updateUserPermissionSets = async (params, contactId) => {
  try {
    const result = await axios.post(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/${contactId}/permission-sets`,
      params,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};
export const deleteUserPermissionSets  = async (params = [], contactId) => {
  try {
    const result = await axios.delete(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/${contactId}/permission-sets`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        data: params,
      },
    );
    return result.data;
  } catch (e) {
    return e;
  }
};
export const updateSuspended = async (userId) => {
  try {
    const result = await axios.patch(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/${userId}/status/suspend`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    let code = _.get(result, "data.code");

    if (code >= 300) {
      return openNotificationWithIcon(
        "error",
        _.get(result, "data.errorMessage")
      );
    } else {
      return openNotificationWithIcon("success", "user is suspended");
    }
  } catch (e) {
    return e;
  }
};

export const updateUnSuspended = async (userId) => {
  try {
    const result = await axios.patch(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/${userId}/status/unsuspend`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    let code = _.get(result, "data.code");

    if (code >= 300) {
      return openNotificationWithIcon(
        "error",
        _.get(result, "data.errorMessage")
      );
    } else {
      return openNotificationWithIcon("success", "user is unsuspended");
    }
  } catch (e) {
    return e;
  }
};

export const getDeactUser = async (userId) => {
  try {
    const result = await axios.patch(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/${userId}/status/deactivate`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const getReactUser = async (userId) => {
  try {
    const result = await axios.patch(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/${userId}/status/reactivate`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const fetchUsersLookup = async () => {};

export const fetchPermissionSetsLookup = async () => {};

export const fetchPermissionsLookup = async () => {};

export const RequestAuthMeta = async (
  con,
  entity,
  contactid,
  currentuserid
) => {
  var result = [];
  try {
    let connection = con ? con : store.getState().Auth.connection;
    if (entity) {
      result = connection
        .sobject("accloud__Community__c")
        .select(
          "Id, Name, accloud__Client_Id__c,accloud__Client_Secret__c, accloud__Remote_Api_Domain__c, accloud__Network_ID__c"
        )
        .where({
          name: entity,
        })
        .execute(function (err, data) {
          if (err) {
            return err;
          } else {
            return PassExtAuth(data, entity, contactid, currentuserid);
          }
        });
    } else {
      result = connection
        .sobject("accloud__Community__c")
        .select(
          "Id, Name, accloud__Client_Id__c,accloud__Client_Secret__c, accloud__Remote_Api_Domain__c, accloud__Network_ID__c"
        )
        .where({
          accloud__Internal_Site__c: true,
        })
        .execute(function (err, data) {
          if (err) {
            return err;
          } else {
            return PassExtAuth(data, entity, contactid, currentuserid);
          }
        });
    }

    return result;
  } catch (e) {
    result = e;
  }
  return result;
};

export const PassExtAuth = async (meta, network, contactid, currentuserid) => {
  if (meta.length === 0) {
    return openNotificationWithIcon(
      "error",
      "No Authorization",
      "Please contact administrator to set up authorization"
    );
  }
  var result = [];
  try {
    let client_id = _.get(meta[0], "accloud__Client_Id__c");
    let client_secret = _.get(meta[0], "accloud__Client_Secret__c");
    let domain = _.get(meta[0], "accloud__Remote_Api_Domain__c");
    let entity = _.get(
      meta[0],
      "accloud_Payment__Money_Movement_Entity_Name__c"
    );
    let auth = window.btoa(client_id + ":" + client_secret);
    // console.log('auth', meta[0])
    var form = new FormData();
    form.append("grant_type", "client_credentials");
    form.append("scope", "crm");

    let selectId = contactid ? contactid : currentuserid;
    result = await axios
      .post(
        domain + "/api/v1/auth/tenant/oauth2/token?username=" + selectId,
        form,
        {
          headers: {
            Authorization: "Basic " + auth,
          },
        }
      )
      .then(function (response) {
        // console.log('response'+response)
        let res = [];
        if (_.get(response, "status") === 200) {
          res = _.get(response, "data.data.accessToken");
        } else {
          res = [];
        }
        return res;
      });

    // console.log('auth2', result);
    return { result: result, domain: domain, entity: entity, network: network, client_id };
  } catch (e) {
    result = e;
  }
  return result;
};

export const getCurrentUserPermissions = async () => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/me/aggregate-permissions`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: {},
      }
    );

    let code = _.get(result, "data.code");

    if (code >= 300) {
      return openNotificationWithIcon(
        "error",
        _.get(result, "data.errorMessage")
      );
    } else {
      let data = _.get(result, "data.data");
      return data;
    }
  } catch (e) {
    return e;
  }
};

export const getAvailablePermissionSets = async (e) => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/permission-sets`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: {},
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const getAvailablePermissions = async (e) => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain +
        "/api/v1/services/company/users/permissions",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: {},
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const getAvailableUsers = async (e) => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain + "/api/v1/services/company/users",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: {},
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const getAvailableModuleSecs = async (e) => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain +
        "/api/v1/services/company/users/permissions/enum",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: {},
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const getAccountsUnderCompany = async (name) => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain + "/api/v1/services/company/users/accounts",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: {
          name: name,
        },
      }
    );

    let code = _.get(result, "data.code");

    if (code >= 300) {
      return openNotificationWithIcon(
        "error",
        _.get(result, "data.errorMessage")
      );
    } else {
      let data = _.get(result, "data.data");
      let options = [];
      data.map((e) => {
        return options.push({
          id: e.id,
          label: e.name,
          value: e.name,
          record: e,
          key: e.id,
          index: e.id,
        });
      });

      return options;
    }
  } catch (e) {
    return e;
  }
};

export const getContactsUnderAccount = async (accountId) => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/accounts/${accountId}/contacts`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: {},
      }
    );

    let code = _.get(result, "data.code");

    if (code >= 300) {
      return openNotificationWithIcon(
        "error",
        _.get(result, "data.errorMessage")
      );
    } else {
      let data = _.get(result, "data.data");
      return data;
    }
  } catch (e) {
    return e;
  }
};

export const addContactsUnderAccount = async (accountId, params) => {
  try {
    const result = await axios.post(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/accounts/${accountId}/contacts`,
      params,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    let code = _.get(result, "data.code");

    if (code >= 300) {
      return openNotificationWithIcon(
        "error",
        _.get(result, "data.errorMessage")
      );
    } else {
      let data = _.get(result, "data.data");
      return data;
    }
  } catch (e) {
    return e;
  }
};

export const getCompanyUserList = async () => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain + `/api/v1/services/company/users`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: {},
      }
    );

    let code = _.get(result, "data.code");

    if (code >= 300) {
      return openNotificationWithIcon(
        "error",
        _.get(result, "data.errorMessage")
      );
    } else {
      let data = _.get(result, "data.data");
      return data;
    }
  } catch (e) {
    return e;
  }
};

export const getPickList = async () => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain +
        `/api/v1/services/obj/sforce/metadata/record-types`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: {
          objectName: "Contact",
        },
      }
    );

    let code = _.get(result, "data.code");
    console.log("get", result);

    if (code >= 300) {
      return openNotificationWithIcon(
        "error",
        _.get(result, "data.errorMessage")
      );
    } else {
      let data = _.get(result, "data.data");
      const contact = data.find((el) => {
        return (
          el.developerName === "Contact_Data_for_an_Institution_or_a_Business"
        );
      });
      console.log("contact", data, contact);
      return contact;
    }
  } catch (e) {
    return e;
  }
};

export const getSinglePickList = async (recordTypeId, params) => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain +
        `/api/v1/services/obj/sforce/metadata/record-types/${recordTypeId}/picklist`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        params: {
          objectName: "Contact",
          ...params,
        },
      }
    );

    let code = _.get(result, "data.code");

    if (code >= 300) {
      return openNotificationWithIcon(
        "error",
        _.get(result, "data.errorMessage")
      );
    } else {
      let data = _.get(result, "data.data");
      return data;
    }
  } catch (e) {
    return e;
  }
};
export const getHierarchy = async (e) => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain + "/api/v1/services/company/users/groups/hierarchy",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        }
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};
export const editUsersGroup = async (groupId, params) => {
  try {
    const result = await axios.put(
      store.getState().Auth.domain + `/api/v1/services/company/users/groups/${groupId}`,
      params,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    let code = _.get(result, "data.code");

    if (code >= 300) {
      openNotificationWithIcon(
        "error",
        "failed",
        _.get(result, "data.errorMessage")
      );
    }
    return _.get(result, "data");
  } catch (e) {
    return e;
  }
};
export const addUserGroup = async (params) => {
  try {
    const result = await axios.post(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/groups`,
      params,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};
export const deleteUserGroup = async (groupId) => {
  try {
    const result = await axios.delete(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/groups/${groupId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        }
      },
    );
    let code = _.get(result, "data.code");

    if (code >= 300) {
      openNotificationWithIcon(
        "error",
        "failed",
        _.get(result, "data.errorMessage")
      );
    } else {
      openNotificationWithIcon("success", "delete Success");
    }
    return result.data
  } catch (e) {
    return e;
  }
};
export const insertGroupUser = async (groupId, params) => {
  var data = JSON.stringify(params);
  
  var config = {
    method: 'post',
    url:  store.getState().Auth.domain +
    `/api/v1/services/company/users/groups/${groupId}/users`,
    headers: { 
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.getState().Auth.meta,
    },
    data
  };
  try {
    const result = await axios(config)
    let code = _.get(result, "data.code");

    if (code >= 300) {
      return openNotificationWithIcon(
        "error",
        "failed",
        _.get(result, "data.errorMessage")
      );
    }
    return result.data
  } catch (e) {
    return e;
  }
};
export const deleteGroupUser  = async (groupId, params = []) => {
  try {
    const result = await axios.delete(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/groups/${groupId}/users`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        data: params,
      },
    );
    let code = _.get(result, "data.code");

    if (code >= 300) {
      return openNotificationWithIcon(
        "error",
        "failed",
        _.get(result, "data.errorMessage")
      );
    } 
    return result.data
  } catch (e) {
    return e;
  }
};
export const insertPermissionSetsGroup = async (groupId, params) => {
  try {
    const result = await axios.post(
      store.getState().Auth.domain +
        `/api/v1/services/company/users/groups/${groupId}/permission-sets`,
      params,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
      }
    );
    let code = _.get(result, "data.code");

    if (code >= 300) {
      return openNotificationWithIcon(
        "error",
        "failed",
        _.get(result, "data.errorMessage")
      );
    }
    return result.data
  } catch (e) {
    return e;
  }
};
export const deletePermissionSetsGroup  = async (groupId, params = []) => {
  try {
    const result = await axios.delete(
      store.getState().Auth.domain + `/api/v1/services/company/users/groups/${groupId}/permission-sets`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        },
        data: params,
      },
    );
    let code = _.get(result, "data.code");

    if (code >= 300) {
      return openNotificationWithIcon(
        "error",
        "failed",
        _.get(result, "data.errorMessage")
      );
    }
    return result.data
  } catch (e) {
    return e;
  }
};
export const getGroupDetail = async () => {
  try {
    const result = await axios.get(
      store.getState().Auth.domain + "/api/v1/services/company/users/groups",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.getState().Auth.meta,
        }
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};
// https://prod-42.westus.logic.azure.com:443/workflows/8e38518bf2d54cfb8368c0ba8532f944/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=sIgTWtJcFFFlXptjfyktVy79hFY9T_whiepp5WCWJgk
export const saveSfContactId = async (params) => {
  try {
    const result = await axios.post(
      process.env.REACT_APP_SF_URL,
      { ...params },
      {
        headers: {
          "Content-Type": "application/json",
          runKey: store.getState().Auth.client_id
        },
      }
    );
    return result.data;
  } catch (e) {
    return e;
  }
};