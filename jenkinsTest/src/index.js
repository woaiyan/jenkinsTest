import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Router from './router/router';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware  } from 'redux'
import { createLogger } from 'redux-logger'
import List from "./component/cart/reducer"
import User from "./component/user/reducer"
import Goods from "./component/goods/reducer"
import Menu from "./component/menu/reducer"
import Home from "./component/home/reducer"
import CssItem from "./component/CssItem/reducer"
import CommonNet from "./component/CommonNet/reducer"
import Picture from "./component/Picture/reducer"
import Svg from  "./component/SvgItem/reducer"
import FileData from "./component/FileData/reducer"
import Accounts from "./component/Accounts/reducer"
import { combineReducers } from 'redux'
import LoginStatus from "./component/Login/reducer"
const appData = combineReducers({
    List,
    User,
    Goods,
    Home,
    CommonNet,
    Menu,
    CssItem,
    Picture,
    Svg,
    FileData,
    Accounts,
    LoginStatus
})
const loggerMiddleware = createLogger()
let store = createStore(appData,  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
))
ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
