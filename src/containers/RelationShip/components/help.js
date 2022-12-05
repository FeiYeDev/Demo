import React from 'react';
import notification from "antd/es/notification";

import _ from 'lodash'
import moment from "moment";

export const openNotificationWithIcon = (type, message, description) => {
    return notification[type]({
        message: message,
        description: description
    });
};

export const errorCheck = (data, module) => {

    let isError = false;
    if (!data.data) {
        isError = true;
        openNotificationWithIcon('info', module, 'API Return Null');
        return isError;
    } else if (_.get(data.data[0], 'errorCode') != null) {
        if (data.data[0].errorCode === 'API_Error') {
            isError = true;
            openNotificationWithIcon('info', module + ' API Error', data.data[0].message);
            return isError;
        } else if (data.data[0].errorCode === 'APEX_ERROR') {
            isError = true;
            openNotificationWithIcon('info', module + ' APEX ERROR', data.data[0].message);
            return isError;
        }
    } else if (data.data.length === 0) {
        isError = true;
        openNotificationWithIcon('info', module, 'No UMA Found');
        return isError;
    }
}

export const asOfDate = () => {
    return moment().format('MMM YYYY')
}


export const colors =
    [
        '#FF6B3B',
        '#626681',
        '#FFC100',
        '#9FB40F',
        '#76523B',
        '#DAD5B5',
        '#0E8E89',
        '#E19348',
        '#F383A2',
        '#247FEA',
        '#2a3e74',
        '#9fc93b',
        "#00FFFF",
        "#00FF00",
        "#008000",
        "#800000",
        "#FFFF00",

        "#FF00FF",
        "#C0C0C0",
        "#808080",
        "#0000FF",
        "#808000",
        "#800080",
        "#008080",
        "#FF0000",
        "#8B0000",
        "#A52A2A",
        "#B22222",
        "#DC143C",
        "#FF0000",
        "#FF6347",
        "#FF7F50",
        "#CD5C5C",
        "#F08080",
        "#E9967A",
        "#FA8072",
        "#FFA07A",
        "#FF4500",
        "#FF8C00",
        "#FFA500",
        "#FFD700",
        "#B8860B",
        "#DAA520",
        "#EEE8AA",
        "#BDB76B",
        "#F0E68C",
        "#808000",
        "#FFFF00",
        "#9ACD32",
        "#556B2F",
        "#6B8E23",
        "#7CFC00",
        "#7FFF00",
        "#ADFF2F",
        "#006400",
        "#008000",
        "#228B22",
        "#00FF00",
        "#32CD32",
        "#90EE90",
        "#98FB98",
        "#8FBC8F",
        "#00FA9A",
        "#00FF7F",
        "#2E8B57",
        "#66CDAA",
        "#3CB371",
        "#20B2AA",
        "#2F4F4F",
        "#008080",
        "#008B8B",
        "#00FFFF",
        "#00FFFF",
        "#E0FFFF",
        "#00CED1",
        "#40E0D0",
        "#48D1CC",
        "#AFEEEE",
        "#7FFFD4",
        "#B0E0E6",
        "#5F9EA0",
        "#4682B4",
        "#6495ED",
        "#00BFFF",
        "#1E90FF",
        "#ADD8E6",
        "#87CEEB",
        "#87CEFA",
        "#191970",
        "#000080",
        "#00008B",
        "#0000CD",
        "#0000FF",
        "#4169E1",
        "#8A2BE2",
        "#4B0082",
        "#483D8B",
        "#6A5ACD",
        "#7B68EE",
        "#9370DB",
        "#8B008B",
        "#9400D3",
        "#9932CC",
        "#BA55D3",
        "#800080",
        "#D8BFD8",
        "#DDA0DD",
        "#EE82EE",
        "#FF00FF",
        "#DA70D6",
        "#C71585",
        "#DB7093",
        "#FF1493",
        "#FF69B4",
        "#FFB6C1",
        "#FFC0CB",
        "#FAEBD7",
        "#F5F5DC",
        "#FFE4C4",
        "#FFEBCD",
        "#F5DEB3",
        "#FFF8DC",
        "#FFFACD",
        "#FAFAD2",
        "#FFFFE0",
        "#8B4513",
        "#A0522D",
        "#D2691E",
        "#CD853F",
        "#F4A460",
        "#DEB887",
        "#D2B48C",
        "#BC8F8F",
        "#FFE4B5",
        "#FFDEAD",
        "#FFDAB9",
        "#FFE4E1",
        "#FFF0F5",
        "#FAF0E6",
        "#FDF5E6",
        "#FFEFD5",
        "#FFF5EE",
        "#F5FFFA",
        "#708090",
        "#778899",
        "#B0C4DE",
        "#E6E6FA",
        "#FFFAF0",
        "#F0F8FF",
        "#F8F8FF",
        "#F0FFF0",
        "#FFFFF0",
        "#F0FFFF",
        "#FFFAFA",
        "#000000",
        "#696969",
        "#808080",
        "#A9A9A9",
        "#C0C0C0",
        "#D3D3D3",
        "#DCDCDC",
        "#F5F5F5",
        "#FFFFFF",
    ]


export const us_states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
]

/**
 *
*  @param fn 执行的防抖函数
 * @param wait 等待时间
 * @param immediate 是否立即执行
 * @returns {
*    @returns stop 可手动停止
*    @returns call 执行的防抖函数
* }
*/
export function debounce(func,wait,immediate) {
 let timer;
 return {
   stop: function () {
     if (timer) clearTimeout(timer);
   },
   call: function () {
     let context = this;
     let args = arguments;
     if (timer) clearTimeout(timer);
     if (immediate) {
       var callNow = !timer;
       timer = setTimeout(() => {
         timer = null;
       }, wait)
       if (callNow) func.apply(context, args)
     } else {
       timer = setTimeout(function(){
         func.apply(context, args)
       }, wait);
     }
   }
 }
}
/**
 *
 * @param {dataSource} data
 * @param {filterSource} filterSource
 * @returns
 */
export function filterData (data = [], filterSource = {}) {
  return data?.filter(item => {
    let isReturn = true
    for (let [key, value] of Object.entries(filterSource)) {
      isReturn = !value || value?.toLocaleLowerCase() === 'all' || (item[key] && ~(item[key].toLocaleLowerCase()?.indexOf(value.toLocaleLowerCase())))
      if (!isReturn) break;
    }
    return isReturn
  })
}

export function addParent(data, parent_id = '') {
  data.parent_id = parent_id
  if (data.children) {
    data.children = data?.children?.map(child => addParent(child, data.id)) || []
  }
  return data;
}

export function updateTree(data, id, cover_d) {
  if (data.id === id) {
    data = {...data, ...cover_d}
  } else {
    data.children = data.children && data?.children?.map(child => updateTree(child, id, cover_d))
  }
  return data;
}

export function insertChild(data, id, data_c) {
  if (data.id === id) {
    data.children ? data.children.push(data_c) : (data.children = [data_c])
    data.expand = true;
  } else {
    data.children = data.children && data?.children?.map(child => insertChild(child, id, data_c))
  }
  return data;
}

export function deleteTree(data, parent_id, id) {
  if (data.id === parent_id) {
    data.children = data.children ? data.children?.filter(item => item.id !== id) : []
  } else {
    data.children = data.children ? data.children?.map(child => deleteTree(child, parent_id, id)) : []
  }
  return data;
}

export function calcClientHeight(eles) {
  const reductionHeight = eles.reduce((pre, next) => {
    return pre + (document.getElementById(next)?.clientHeight || 0)
  }, 150)
  const bodyHeight = document.body.clientHeight
  const otherHeight = bodyHeight - reductionHeight
  return otherHeight
}