import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Orders from './components/views/Orders/Orders';
import Tables from './components/views/Tables/Tables';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Order from './components/views/Order/Order.js';
import Booking from './components/views/Booking/Booking.js';
import Event from './components/views/Event/Event.js';
import Dashboard from './components/views/Dashboard/Dashboard.js';


function App() {
  return (
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
          <Route exact path={`${process.env.PUBLIC_URL}/orders/order/:id`} component={Order} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
