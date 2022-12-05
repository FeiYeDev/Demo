import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import 'antd/dist/antd.variable.min.css'
import './index.css';
import './assets/styles/tailwind.min.css'
import Body from "@containers/Body";

const App = () => (
    <Provider store={store}>
        <>
            <Body/>
        </>
    </Provider>
);


export default App;
