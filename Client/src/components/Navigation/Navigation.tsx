// @ts-nocheck
import "./Navigation.css";
import { Link } from "react-router-dom";
import { SyntheticEvent } from "react";


// interface NavigationProps {
//   user: string
// }

const Navigation: React.FC<NavigationProps> = ({ loggedIn, setLoggedIn }) => {
  const handleClick = (e: SyntheticEvent) => {
    const toggler = document.querySelector("input");

    if (toggler?.checked === true) {
      toggler.checked = false;
    }
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
                  <li onClick={handleClick}>
                    <Link to="/save">Save</Link>
                  </li>
                  <li onClick={handleClick}>
                    <Link to="/codes">Load</Link>
                  </li>

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
