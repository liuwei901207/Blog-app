import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  ...((require('/Users/liuwei/Desktop/Gits/Git-my/Blog-app/src/dva.js').config || (() => ({})))()),
});

window.g_app = app;
app.use(createLoading());
app.use(require('../../plugins/onError.js').default);
app.use(require('/Users/liuwei/Desktop/Gits/Git-my/Blog-app/node_modules/_dva-immer@0.2.3@dva-immer/lib/index.js').default());


class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
