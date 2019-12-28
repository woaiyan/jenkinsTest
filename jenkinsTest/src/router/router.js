import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../component/home/container';
import user from '../component/user/user';
import cart from '../component/cart/cart';
import goods from '../component/goods/Goods';
import menu from '../component/menu/container';
import commonNet from '../component/CommonNet/container';
import CssItem from "../component/CssItem/container"
import Picture from "../component/Picture/container"
import SvgItem from "../component/SvgItem/container"
import FileData from "../component/FileData/container"
import Accounts from "../component/Accounts/container"
const Router = () => (
    <HashRouter>
        <Home>
            <Switch>
                <Route exact path="/cart" component={cart}/>
                <Route  path="/user" component={user}/>
                <Route  path="/goods" component={goods}/>
                <Route  path="/picture" component={Picture}/>
                <Route  path="/commonNet" component={commonNet}/>
                <Route  path="/cssItem" component={CssItem}/>
                <Route  path="/SvgItem" component={SvgItem}/>
                <Route  path="/fileData" component={FileData}/>
                <Route  path="/accounts" component={Accounts}/>
                <Route  path="/Home" component={menu}/>
                <Route  path="/" component={menu}/>
            </Switch>
        </Home>
    </HashRouter>
);
export default Router;