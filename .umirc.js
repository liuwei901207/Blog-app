export default {
  // 使用插件
  plugins: [
    [
      'umi-plugin-routes', {
      exclude: [
        /components/,
        /models/,
        /services/,
      ],
    }],
    ['umi-plugin-dva', {immer: true}],
  ],
  // 权限路由设置
  pages: {
    '/login': { Route: './routes/PrivateRouteForLogged.js' },
    '/admin': { Route: './routes/PrivateRouteForLogged.js' },
  },
}