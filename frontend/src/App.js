import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotsBrowser from "./components/Spots/SpotsBrowser/SpotsBrowser";
import SpotsDetail from "./components/Spots/SpotDetail/SpotDetail";
import EditSpotForm from "./components/Spots/EditSpotForm/EditSpotForm";
// import CreateReviewForm from "./components/Reviews/CreateReviewFormPage/CreateReviewFormPage";

const App = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className="app-root">
      <Navigation isLoaded={isLoaded} />
          {isLoaded && (
            <Switch>
              <Route exact path={["/", "/spots"]}>
                <SpotsBrowser />
              </Route>
              <Route exact path="/spots/:id">
                <SpotsDetail />
              </Route>
              <Route exact path="/spots/:id/edit">
                <EditSpotForm />
              </Route>
              {/* <Route exact path="/spots/:id/review">
                <CreateReviewForm />
              </Route> */}
              <Route>Page Not Found</Route>
            </Switch>
          )}
    </div>
  );
};

export default App;
