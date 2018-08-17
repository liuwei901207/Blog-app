export default {
  // 使用插件
  plugins: [
    [
      'umi-plugin-routes', {
      exclude: [
        /models/,
        /services/,
      ],
    }],
    ['umi-plugin-dva', {immer: true}],
  ],
  // 权限路由
  pages: {
    '/admin': { Route: './routes/PrivateRoute.js' },
  },
}