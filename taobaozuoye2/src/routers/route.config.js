/*
 * @Author       : yfye
 * @Date         : 2020-09-27 10:13:21
 * @LastEditors  : yfye
 * @LastEditTime : 2020-10-20 00:11:30
 * @FilePath     : \react-website(1)(1)\src\routers\route.config.js
 */

import { Route } from 'react-router-dom';
import React from 'react';
import Home from '@/pages/Home/Home';
import Collection from '@/pages/Collection/Collection';
import GoodList from '@/pages/GoodList/GoodList';
import MyTaobao from '@/pages/MyTaobao/MyTaobao';
import More from '@/pages/More/More';
import Login from '@/pages/Login/Login';
import GoodDetail from '@/pages/GoodDetail/GoodDetail';
import FindSearch from '@/pages/FindSearch/FindSearch';
import Include from './include'
const Router = () => {
    return (
        <Include>
        <div>
          <Route exact path="/" component={Home}/>
          <Route  path={`/Home`} component={Home} />
          <Route  path={`/Collection/:text`} component={Collection} />
          <Route path={`/GoodList`} component={GoodList} />
          <Route  path={`/More`} component={More} />
          <Route path={`/MyTaobao`} component={MyTaobao} />
          <Route  path={`/login`} component={Login} />
          <Route  path={`/goodDetail/:id`} component={GoodDetail} />
        <Route path={`/FindSearch`} component={FindSearch} />
        </div>
         </Include>
    );
  };
  
  export default Router;