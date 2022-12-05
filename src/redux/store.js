import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

const initialState = {};
// const bindMiddleware = middleware => {
//     if (process.env.NODE_ENV !== 'production') {
//         const {composeWithDevTools} = require('redux-devtools-extension');
//         return composeWithDevTools(applyMiddleware(...middleware));
//     }
//
//     return applyMiddleware(...middleware);
// };
const bindMiddleware = middleware => {
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
};

const store = createStore(rootReducer, initialState, bindMiddleware(middlewares));
sagaMiddleware.run(rootSaga);
export {store};
