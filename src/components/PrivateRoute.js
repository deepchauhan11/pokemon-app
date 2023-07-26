// src/components/PrivateRoute.js

import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Routes>
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Link to="/login" />
      }
    />
    </Routes>
  );
};

export default PrivateRoute;
