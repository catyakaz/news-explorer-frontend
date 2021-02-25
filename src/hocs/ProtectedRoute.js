import React, { useContext } from 'react';

import { Route, Redirect } from 'react-router-dom';

import CurrentUserContext from '../contexts/CurrentUserContext';

function ProtectedRoute({ component: Component, isLoading, path, openLoginPopup, ...props }) {
  const currentUser = useContext(CurrentUserContext);

  if (!currentUser) {
    openLoginPopup();
  }

  return (
    <Route path={path}>
      {currentUser ? <Component {...props} /> : <Redirect to='/' />}
    </Route>
  )
}

export default ProtectedRoute;