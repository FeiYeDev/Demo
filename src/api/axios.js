import axios from 'axios'
import qs from 'query-string'
import ExtendableError from 'es6-error'
import { notification } from 'antd'
import { store } from '@redux/store'
export class APIError extends ExtendableError {
  constructor(message = '') {
    super(message)
  }
}

const VALID_IP_REGEXP =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/
const VALID_HOST_REGEXP =
  /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])/
export const getAPIPrefix = (str) => {
  let val = str || '/'
  if (typeof val === 'string') {
    if (/^https?:/.test(val)) {
      val = val.replace(/^(https?:)/, protocol)
    } else {
      if (VALID_IP_REGEXP.test(val) || VALID_HOST_REGEXP.test(val)) {
        val = `${protocol}//${val}`
      } else {
        val = val.replace(/^([^/.])/, '/$1')
      }
    }
    val = val.replace(/([^/])$/, '$1/')
  }
  return val
}
export const getAPIUrl = (prefix, endpoint) => {
  const url = `${prefix}/${endpoint}`
  const re = new RegExp(
    `/+(${endpoint.replace(/^\/+/, '').replace(/\?.*$/, '')})`
  )
  return url.replace(re, '/$1')
}
const noop = () => {}
const { protocol } = window.location
const { CancelToken } = axios
/**
 * Pass in the host address of the API interface and generate an API instance that you can use to make various CURD requests
 *
 * ```js
 * const api = createAPI(process.env.MUJI_APP_API_BASE);
 * const fetchData = async () => {
 *   const data = await api.getJSON('/orders'); // GET request
 *   console.log(data);
 * }
 * ```
 *
 * By default, createAPI will unpack the result according to the search criteria, i.e., return only `{success: true, data: {...}, code: xxx, msg: xxx}`
 * If you want to determine whether the interface returned successfully, you can make a logical judgment in the catch field
 * ```js
 * const update = (data) => {
 *   api
 *     .postJSON('/orders', data, {
 *       showNotification: false // show Disable the default error message ?
 *     })
 *     .then((resp) => {
 *       // request success
 *     })
 *     .catch((err) => {
 *       // request fail
 *     })
 * }
 * ```
 *
 * @param {string} host API host
 * @param {IRequestConfig} apiConfig API config setting
 */
const createAPI = (host, apiConfig = {}) => {
  const prefix = getAPIPrefix(host)
  function request(endpoint, reqConfig = {}) {
    const config = {
      ...apiConfig,
      ...reqConfig,
    }
    const {
      showNotification = true,
      handleOption,
      handleResp = (resp) => resp.data,
      ...reqOpts
    } = config
    const url = getAPIUrl(prefix, endpoint)
    let cancel = noop
    console.log(store.getState(),'store.getState()');
    let opts = {
      withCredentials: false,
      headers: {
        Authorization: 'Bearer ' + store.getState().Auth.meta,
        // Authorization:
        // 'Bearer 00D8a000001lC9D!AQMAQK3nnXYW9ZjD_9j3Ah6NTgnDJbUBdrdq__kBsjoVqHAwnyvx6leo1F_wmN7FM3uD77trPrGChZ_yXmWS7kWpCKCDMsUB',
        // 'Bearer eyJraWQiOiJpWkNSa3FPTWNLNTB5UVlUN3h4cXhWRDNxUURuRjhMckZjSklveUJZU2hRIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnpXOWVkcU4tV1FtRHI4bDQ1VU5sZ29TMUdfUUoyalQ5MG9LRFBUNlY4ZkEiLCJpc3MiOiJodHRwczovL2ZpbnRlY2hhdXRvbWF0aW9uc3NvLm9rdGFwcmV2aWV3LmNvbS9vYXV0aDIvYXVzM2JyenZic2trb1lkZmExZDciLCJhdWQiOiJhcGk6Ly90ZW5hbnQiLCJpYXQiOjE2NTcyODQ3MDcsImV4cCI6MTY1NzI5MTkwNywiY2lkIjoiMG9hM2JzZGRqaEFMd1BadzcxZDciLCJzY3AiOlsiZGVmYXVsdCJdLCJzdWIiOiIwb2EzYnNkZGpoQUx3UFp3NzFkNyIsImNsaWVudElkIjoiMG9hM2JzZGRqaEFMd1BadzcxZDcifQ.sDdtN09DJ0m_9cbmIvEr1B8bFq7guCrOymZqMuOFUwtg31AP7sz4JsdmF_Pnvy_z5hgEEEQnqG2VRByNZ1I5lKuIY4CBQ74IgHdFxk0aeXs9gtPMBow9wGixcKjuHIRxvewFIJTRnPv-Uv4h4X_9cbVcvjcbXDsY1OhGPH8dErQpChH0a8ScJV6oCi9gW1hSI7ic0s4n-n7uyNnMLecUf41nhPbEXipOIAhkijcKfGyhyG5R6Jy4vQLJKWC1JHyRQ2SviUBddtUwTYMOn1V-xAR7S-SynUGIRENlOaJ8D9g0sgums_qbredQbsC9aHZV947Ol3pydp4swDZuRnW-Ow',
      },
      baseURL:store.getState().Auth.domain,
      cancelToken: new CancelToken((c) => (cancel = c)),
      ...reqOpts,
    }
    if (handleOption) {
      opts = handleOption(opts) || opts
    }
    const promise = axios(url, opts)
      .then(checkStatus)
      .then((resp) => resp.data)
      .then(checkResp)
      .then((resp) => handleResp(resp))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.warn(`request cancel${endpoint}`)
          return
        }
        // if (showNotification) {
        //   notification.error({
        //     message: `request err ${url}}`,
        //     description: 'request fail',
        //     placement: 'bottomRight',
        //   })
        // }
        throw err
      })
    promise.promise = promise
    promise.cancel = cancel
    return promise

    function checkStatus(resp) {
      if (resp.status >= 200 && resp.status < 300) {
        return resp
      }
      if (showNotification) {
        notification.error({
          message: `request err ${resp.status}: ${resp.config.url}`,
          description: resp.statusText,
          placement: 'bottomRight',
        })
      }
    }

    function checkResp(data) {
      if (!data.error && data.code === 200) {
        return data
      }
      if (showNotification) {
        notification.error({
          message:
            process.env.NODE_ENV === 'development'
              ? `request fail ${data.code}: ${url}`
              : `request fail`,
          description:
            data.errorMessage || data.message || data.error.errorSummary,
          placement: 'bottomRight',
        })
      }
      throw new Error(
        data.errorMessage || data.message || data.error.errorSummary
      )
    }
  }
  /**
   *  GET
   *
   * @param {string} endpoint
   * @param {Record<string, string | number>} data
   * @param {IRequestConfig} config
   */

  function getJSON(endpoint, data = {}, config = {}) {
    return request(endpoint, {
      ...config,
      method: 'get',
      params: data,
    })
  }
  /**
   * POST
   *
   * @param {string} endpoint
   * @param {Record<string, string | number>} data
   * @param {IRequestConfig} config
   */

  function postJSON(endpoint, data = {}, config = {}) {
    return request(endpoint, {
      ...config,
      method: 'post',
      data,
    })
  }
  /**
   *  POST request is made in the form of a form, usually for uploading a file
   *
   * How to upload a file using postForm:
   *
   * ```js
   * const input = document.createElement('input');
   * input.type = 'file';
   * input.click();
   * input.addEventListener('change', () => {
   *   // A file object represents a file object that you select from your browser. You can retrieve a file object in many different ways, but you can also use the ANTd Upload component to retrieve a file object
   *   const file = input.files[0];
   *   const formData = new FormData();
   *   formData.append('file', file);
   *   api.postForm('upload', formData);
   * });
   * ```
   *
   * @param {string} endpoint
   * @param {FormData | Record<string, string | number>} data
   * @param {IRequestConfig} config
   */

  function postForm(endpoint, data = {}, config = {}) {
    return request(endpoint, {
      ...config,
      method: 'post',
      data: data instanceof FormData ? data : qs.stringify(data),
    })
  }
  /**
   * postFile
   * @param {string} endpoint
   * @param {Record<string, File>} files
   * @param {IRequestConfig} config
   */

  function postFile(endpoint, files, config) {
    const isFile = (f) => Object.prototype.toString.call(f) === '[object File]'
    const fd = new FormData()
    Object.keys(files).forEach((k) => {
      // if (!isFile(files[k]))
      //   throw new Error(
      //     'he postFile method accepts only key-value pairs of File objects as arguments！'
      //   )
      fd.append(k, files[k])
    })
    return postForm(endpoint, fd, config)
  }
  /**
   * putJSON
   * @param {string} endpoint
   * @param {Record<string, string | number>} data
   * @param {IRequestConfig} config
   */

  function putJSON(endpoint, data = {}, config) {
    return request(endpoint, {
      ...config,
      method: 'put',
      data,
    })
  }
  /**
   * patchJSON
   * @param {string} endpoint
   * @param {Record<string, string | number>} data
   * @param {IRequestConfig} config
   */

  function patchJSON(endpoint, data = {}, config) {
    return request(endpoint, {
      ...config,
      method: 'patch',
      data,
    })
  }
  /**
   * deleteJSON
   * @param {string} endpoint
   * @param {Record<string, string | number>} data
   * @param {IRequestConfig} config
   */

  function deleteJSON(endpoint, data = {}, config) {
    return request(endpoint, {
      ...config,
      method: 'delete',
      data,
    })
  }
  /**
   * get API url
   *
   * @param {string} endpoint
   */

  function resovleUrl(endpoint) {
    return getAPIUrl(prefix, endpoint)
  }
  return {
    resovleUrl,
    request,
    getJSON,
    postJSON,
    postForm,
    postFile,
    putJSON,
    patchJSON,
    deleteJSON,
  }
}
export default createAPI
