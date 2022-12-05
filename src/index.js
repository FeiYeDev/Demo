import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './index.css'
// import bootstrap from './bootstrap'
import rootAuth from './rootAuth'
import { ConfigProvider, Result } from 'antd'
import { HashRouter } from 'react-router-dom'

const init = () => {

  return rootAuth().then(status => {
      // // console.log('stepThree', status)
      return status
  })
}

const createCss = (href, rel) => {
  const css_h = document.createElement('link');
  css_h.setAttribute('href', href)
  css_h.setAttribute('rel', rel)
  const header_h = document.getElementsByTagName('head')[0]
  header_h.appendChild(css_h)
}

createCss('https://pro.fontawesome.com/releases/v5.10.0/css/all.css', 'stylesheet')
createCss('https://fonts.googleapis.com', 'preconnect')
createCss('https://fonts.gstatic.com', 'preconnect')
createCss('https://fonts.googleapis.com/css2?family=Poppins&display=swap', 'stylesheet')
const RootApp = () => (<HashRouter>
  <ConfigProvider>
      <App />
  </ConfigProvider>
</HashRouter>)
init().then(status => {
    // console.log('stepFour', status)
    const result = <Result status="warning" title="There are some problems with your accessToken" />
    let render = status ? <RootApp /> : result
    ReactDOM.render(render, document.getElementById('root'));
}).catch((err) => {
    if (process.env.NODE_ENV === 'development') {
        console.error(err)
    }
})
