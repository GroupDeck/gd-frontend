import React, { useContext, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
import LoadingSpinner from "./components/UI/Spinner/LoadingSpinner";
import NotFound from "./pages/NotFound";
import NewGroup from "./pages/NewGroup";
import JoinGroup from "./pages/JoinGroup";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <main>
          <Switch>
            <Route path="/" exact>
              {!ctx.isLoggedIn && <Login />}
              {ctx.isLoggedIn && <Home />}
            </Route>
            <Route path="/new-group">
              <NewGroup />
            </Route>
            <Route path="/join">
              <JoinGroup />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
