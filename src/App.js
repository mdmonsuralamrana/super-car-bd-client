import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Book from './components/Dashboard/Book/Book';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Review from './components/Dashboard/Review/Review';
import AddServices from './components/Dashboard/AddServices/AddServices';
import OrderList from './components/Dashboard/OrderList/OrderList';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';
import BookingList from './components/Dashboard/BookingList/BookingList';


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/book">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/booking-list">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/order-list">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/add-service">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/make-admin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/manage-services">
            <ManageServices></ManageServices>
          </PrivateRoute>
        </Switch>
      </Router>
  );
}

export default App;