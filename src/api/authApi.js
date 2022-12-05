import _ from 'lodash'
import createAPI from './axios'
import { store } from '@redux/store'
import notification from 'antd/es/notification'
export const RequestAuthMeta = async (
    con,
    entity,
    contactid,
    currentuserid
  ) => {
    var result = []
    try {
      let connection = con ? con : store.getState().Auth.connection
      if (entity) {
        result = connection
          .sobject('accloud__Community__c')
          .select(
            'Id, Name, accloud__Client_Id__c,accloud__Client_Secret__c, accloud__Remote_Api_Domain__c, accloud__Network_ID__c'
          )
          .where({
            name: entity,
          })
          .execute(function (err, data) {
            if (err) {
              return err
            } else {
              return PassExtAuth(data, entity, contactid, currentuserid)
            }
          })
      } else {
        result = connection
          .sobject('accloud__Community__c')
          .select(
            'Id, Name, accloud__Client_Id__c,accloud__Client_Secret__c, accloud__Remote_Api_Domain__c, accloud__Network_ID__c'
          )
          .where({
            accloud__Internal_Site__c: true,
          })
          .execute(function (err, data) {
            if (err) {
              return err
            } else {
              return PassExtAuth(data, entity, contactid, currentuserid)
            }
          })
      }
  
      return result
    } catch (e) {
      result = e
    }
    return result
  }

export const PassExtAuth = async (meta, network, contactid, currentuserid) => {
  if (meta.length === 0) {
    return notification.error({
      message: 'No Authorization',
      description: 'Please contact administrator to set up authorization',
      placement:'bottomRight'
    })
  }
  var result = []
  try {
    let client_id = _.get(meta[0], 'accloud__Client_Id__c')
    let client_secret = _.get(meta[0], 'accloud__Client_Secret__c')
    let domain = _.get(meta[0], 'accloud__Remote_Api_Domain__c')
    let entity = _.get(
      meta[0],
      'accloud_Payment__Money_Movement_Entity_Name__c'
    )
    console.log(window.btoa(client_id + ':' + client_secret));
    let auth = window.btoa(client_id + ':' + client_secret)
    // console.log('auth', meta[0])
    var form = new FormData()
    form.append('grant_type', 'client_credentials')
    form.append('scope', 'crm')

    let selectId = contactid ? contactid : currentuserid
    const instance = createAPI(domain)
    result = await instance.postJSON(
      '/api/v1/auth/tenant/oauth2/token?username=' + selectId,
      form,
      {
        headers: {
          Authorization: 'Basic ' + auth,
        },
      }
    )
    return {
      result: _.get(result, 'accessToken'),
      domain: domain,
      entity: entity,
      network: network,
    }
  } catch (e) {
    result = e
  }
  return result
}
