import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
// import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from './store/session';
import Navigation from "./components/Navigation";
// import CreateSpotForm from "./components/spots/CreateSpotForm";
import SpotsBrowser from "./components/spots/SpotsBrowser";

function App() {
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
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route exact path={['/', '/spots']}>
            <SpotsBrowser />
          </Route>
        </Switch>
      )}
    </>
  );
};

export default App;
