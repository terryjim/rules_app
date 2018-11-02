import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';
import { createBrowserHistory } from 'history';
import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducers from '../../reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { withRouter } from 'react-router-dom';
import SuccessModal from '../../components/SuccessModal'
import ErrModal from '../../components/ErrModal'
import ConfirmModal from '../../components/ConfirmModal'
import LoadingModal from '../../components/LoadingModal'
class DefaultLayout extends Component {
  render() {    
    if (window.sessionStorage.accessToken == null || window.sessionStorage.accessToken == undefined || window.sessionStorage.accessToken === '') {
      return <Redirect push to="/login" />
    } else {
      return (
        <div className="app">
          <AppHeader fixed>
            <DefaultHeader />
          </AppHeader>
          <ErrModal/><SuccessModal/><ConfirmModal/><LoadingModal/>
          <div className="app-body">
            <AppSidebar fixed display="lg">
              <AppSidebarHeader />
              <AppSidebarForm />
              <AppSidebarNav navConfig={navigation} {...this.props} />
              <AppSidebarFooter />
              <AppSidebarMinimizer />
            </AppSidebar>
            <main className="main" >
              <AppBreadcrumb appRoutes={routes}/>
              <Container fluid>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                      <route.component {...props} />
                    )} />)
                      : (null);
                  },
                  )}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Container>
            </main>
            <AppAside fixed hidden>
              <DefaultAside />
            </AppAside>
          </div>
          <AppFooter fixed>
            <DefaultFooter />
          </AppFooter>
        </div>
      );
    }
  }
}
withRouter(DefaultLayout)
export default DefaultLayout;
