
import { Route } from 'react-router-dom';
import React from 'react';
import Home from '@/pages/Home/Home';//首页
import Doc from '@/pages/Doc/Doc';//概览
import Tuto from '@/pages/Tuto/Tuto';//组织生活
import Blog from '@/pages/Blog/Blog';//教育学习
import Comm from '@/pages/Comm/Comm';//组织生活新添
import Include from './include'
const Router = () => {
    return (
        <Include>
          <Route exact path="/" component={Home}/>
          <Route  path={`/Home`} component={Home} />
          <Route  path={`/doc/:text`} component={Doc} />
          <Route path={`/tuto`} component={Tuto} />
          <Route  path={`/comm`} component={Comm} />
          <Route  path={`/blog`} component={Blog} />
        </Include>
    );
  };
  
  export default Router;