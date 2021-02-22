// @ts-nocheck
import "./Navigation.css";
import { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { SyntheticEvent } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

// interface NavigationProps {
//   user: string
// }

const Navigation: React.FC<NavigationProps> = ({ loggedIn, setLoggedIn, save, load, userCode, userId }) => {
  const handleClick = (e: SyntheticEvent) => {
    const toggler = document.querySelector("input");

    if (toggler?.checked === true) {
      toggler.checked = false;
    }
  };

  const handleSave = () => {
    const toggler = document.querySelector("input");

    if (toggler?.checked === true) {
      toggler.checked = false;
    }
    
    const code = {...userCode, title: Date.now()};

    save(code, userId);
  };

  const handleLogout = (e: SyntheticEvent) => {
    const toggler = document.querySelector("input");

    if (toggler?.checked === true) {
      toggler.checked = false;
    }

    localStorage.clear();
    setLoggedIn(false);
  };

  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
                <li onClick={handleClick}>
                    <Link to="/">Home</Link>
                </li>
              {loggedIn ? (
                <>
                  <li onClick={handleSave}>Save</li>
                  <li onClick={handleClick}>
                    <Link to="/codes">Load</Link>
                  </li>
                  <li>Email</li>
                  <li onClick={handleLogout}>
                    <Link to="/">Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li onClick={handleClick}>
                    <Link to="/signup">Signup</Link>
                  </li>
                  <li onClick={handleClick}>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
