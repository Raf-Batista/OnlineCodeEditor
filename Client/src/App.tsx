//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { Header, Navigation, CellList, Signup, Login, UserCodes, Save } from "./components";
import { Route, Switch } from "react-router-dom";
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';
import { ToastContainer } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { toggleTheme } from './scripts/theme-switcher';

const App: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const { checkIfLoggedIn, saveCode, loadCode, logoutUser } = useActions();
    const loggedInUser = useTypedSelector((state) => state.user);
    const {order, data} = useTypedSelector((state) => state.cells);
    const { isLoggingIn } = useTypedSelector((state) => state.user);
    const userCode = {order: order, data: data};

    // Refactor this 
    const user = localStorage.getItem('user');
    const userId = user && JSON.parse(user).id

    useEffect(() => {
      setShowLoading(isLoggingIn);
      const user = localStorage.getItem('user');
      if (user && !loggedIn) {
          setLoggedIn(true);
          checkIfLoggedIn(JSON.parse(user));
      } 
    }, [checkIfLoggedIn, loggedInUser, loggedIn, showLoading]);


  return (
    <>
      <div className={`loading-spinner-container loading-spinner-${isLoggingIn}`}>
        <div className="loading-spinner">
          <ClipLoader color={'white'} loading={true}  size={150} />
        </div>
      </div>
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} logout={logoutUser} />
      <Header toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path="/" component={CellList} />
        <Route exact path="/signup" render={(routeProps) => <Signup {...routeProps} loggedIn={loggedIn} /> } />
        <Route exact path="/login" render={(routeProps) => <Login {...routeProps} loggedIn={loggedIn} /> } />
        <Route exact path="/codes" render={(routeProps) => <UserCodes {...routeProps}  user={loggedInUser} load={loadCode} />} />
        <Route exact path="/save" render={(routeProps) => <Save {...routeProps}  loggedIn={loggedIn} setLoggedIn={setLoggedIn} save={saveCode} userCode={userCode} userId={userId} /> } />
      </Switch>
      <ToastContainer/>
    </>
  );
};

export default App;
