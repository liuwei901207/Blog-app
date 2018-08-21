import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layout/index.js').default,
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": require('../404.js').default
      },
      {
        "path": "/admin",
        "exact": true,
        "component": require('../admin/index.js').default,
        "Route": require('/Users/liuwei/Desktop/Gits/Git-my/Blog-app/routes/PrivateRouteForLogged.js').default
      },
      {
        "path": "/home",
        "exact": true,
        "component": require('../home/index.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('../login/index.js').default,
        "Route": require('/Users/liuwei/Desktop/Gits/Git-my/Blog-app/routes/PrivateRouteForLogged.js').default
      },
      {
        "component": () => React.createElement(require('/Users/liuwei/.nvm/versions/node/v9.11.1/lib/node_modules/umi/node_modules/_umi-build-dev@0.22.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src/layout/index.js","routes":[{"path":"/404","exact":true,"component":"./src/pages/404.js"},{"path":"/admin","exact":true,"component":"./src/pages/admin/index.js","Route":"./routes/PrivateRouteForLogged.js"},{"path":"/home","exact":true,"component":"./src/pages/home/index.js"},{"path":"/","exact":true,"component":"./src/pages/index.js"},{"path":"/login","exact":true,"component":"./src/pages/login/index.js","Route":"./routes/PrivateRouteForLogged.js"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
