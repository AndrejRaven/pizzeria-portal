import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Orders from './components/views/Orders/Orders';
import Tables from './components/views/Tables/Tables';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import NewOrder from './components/views/NewOrder/NewOrderContainer';
import Booking from './components/views/Booking/Booking.js';
import Event from './components/views/Event/Event.js';
import Dashboard from './components/views/Dashboard/Dashboard.js';
import { Provider } from 'react-redux';
import store from './redux/store.js';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/'}>
        <MainLayout>
          <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
            <Route exact path={`${process.env.PUBLIC_URL}/login/`} component={Login} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/`} component={Tables} />
            <Route exact path={`${process.env.PUBLIC_URL}/orders/`} component={Orders} />
            <Route exact path={`${process.env.PUBLIC_URL}/kitchen/`} component={Kitchen} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/event/:id`} component={Event} />
            <Route exact path={`${process.env.PUBLIC_URL}/orders/order/new`} component={NewOrder} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
