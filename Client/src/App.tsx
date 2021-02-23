//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { Header, Navigation, CellList, Signup, Login, UserCodes, Save } from "./components";
import { Route, Switch } from "react-router-dom";
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';

const App: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const { checkIfLoggedIn, saveCode, loadCode } = useActions();
    const loggedInUser = useTypedSelector((state) => state.user);
    const {order, data} = useTypedSelector((state) => state.cells);
    const userCode = {order: order, data: data};

    // Refactor this 
    const user = localStorage.getItem('user');
    const userId = user && JSON.parse(user).id

    useEffect(() => {
      const user = localStorage.getItem('user');
      if (user && !loggedIn) {
          setLoggedIn(true);
          checkIfLoggedIn(JSON.parse(user));
      } 
    }, [checkIfLoggedIn, loggedInUser, loggedIn]);


  return (
    <>
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Header />
      <Switch>
        <Route exact path="/" component={CellList} />
        <Route exact path="/signup" render={(routeProps) => <Signup {...routeProps} loggedIn={loggedIn} /> } />
        <Route exact path="/login" render={(routeProps) => <Login {...routeProps} loggedIn={loggedIn} /> } />
        <Route exact path="/codes" render={(routeProps) => <UserCodes {...routeProps}  user={loggedInUser} load={loadCode} />} />
        <Route exact path="/save" render={(routeProps) => <Save {...routeProps}  loggedIn={loggedIn} setLoggedIn={setLoggedIn} save={saveCode} userCode={userCode} userId={userId} /> } />
      </Switch>
    </>
  );
};

export default App;
