import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session';
import Navigation from "./components/Navigation";
import SpotsBrowser from "./components/spots/SpotsBrowser";
import SpotsDetail from "./components/spots/SpotDetail";
import EditSpotForm from "./components/spots/EditSpotForm";

const App = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
    <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path={['/', '/spots']}>
            <SpotsBrowser />
          </Route>
          <Route exact path='/spots/:id'>
            <SpotsDetail />
          </Route>
          <Route path='/spots/:id/edit'>
            <EditSpotForm />
          </Route>
          <Route>
            Page Not Found
          </Route>
        </Switch>
      )}
    </>
  );
};

export default App;
