 import { notification } from "antd";
 const formatNumber = (num) => {
     num = num.toString()
     return num[1] ? num : '0' + num
 }
 export const openNotificationWithIcon = (type, message, description) => {
     return notification[type]({
         message: message,
         description: description,
         placement: 'bottomRight'
     });
 };
 export function firstToUpper(str){
     return str.replace(/\b(\w)(\w*)/g, function($0, $1, $2) {
         return $1.toUpperCase() + $2.toLowerCase();
     });
 }
 
 const formatterCurrency = new Intl.NumberFormat('en-US', {
     style: 'currency',
     currency: 'USD',
 })
 
 export {
     formatNumber,
     formatterCurrency
 }