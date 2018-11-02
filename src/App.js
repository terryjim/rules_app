import React, { Component } from 'react';
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom';

// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Login, Page404, Page500, Register ,ChgPwd} from './views/Pages';
import { createBrowserHistory } from 'history';
import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducers from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// import { renderRoutes } from 'react-router-config';
const history = createBrowserHistory();
const store = createStore(reducers, undefined, 
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  ))
//store.dispatch(getOss())
//setInterval(() => store.dispatch(getOss()), 1000 * 60 * 30)   //定时获取oss信息
class App extends Component {
 
  render() {
    return (
      <Provider store={store}>
      <HashRouter >
        <Switch>
          <Route exact path="/login" name="登录" component={Login} />
          <Route exact path="/chgPwd" name="修改密码" component={ChgPwd} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>
   
      </Provider>
    );
  }
}

export default App;
