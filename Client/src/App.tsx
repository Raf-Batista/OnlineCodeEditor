//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { Header, Navigation, CellList, Signup, Login } from "./components";
import { Route, Switch } from "react-router-dom";
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';

const App: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const { checkIfLoggedIn } = useActions();
    const loggedInUser = useTypedSelector((state) => state.user);
    useEffect(() => {
      const user = localStorage.getItem("user");
      if (user) {
          setLoggedIn(true);
          checkIfLoggedIn(JSON.parse(user));
      } else if (loggedInUser) {
        setLoggedIn(true);
      }
    }, [checkIfLoggedIn, loggedInUser]);
  return (
    <>
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Header />
      <Switch>
        <Route exact path="/" component={CellList} />
        <Route exact path="/signup" render={(routeProps) => <Signup {...routeProps} loggedIn={loggedIn} /> } />
        <Route exact path="/login" render={(routeProps) => <Login {...routeProps} loggedIn={loggedIn} /> } />
      </Switch>
    </>
  );
};

export default App;

// ReactDOM.render(<App />, document.querySelector('#root'));
