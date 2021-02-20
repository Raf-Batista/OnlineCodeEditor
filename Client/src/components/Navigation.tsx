// @ts-nocheck
import './Navigation.css';
import { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom'; 
import { SyntheticEvent } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

// interface NavigationProps {
//   user: string
// }

const Navigation: React.FC<NavigationProps> = () => {
  const { loginUser } = useActions();
  const loggedInUser = useTypedSelector((state) => state.user);
  useEffect(() => {
      const user = localStorage.getItem('user');
      if (user) {
          loginUser(user);
      };
  }, [loggedInUser]);
  
  const handleClick = (e: SyntheticEvent) => {
    const toggler = document.querySelector('input');

    if (toggler?.checked === true) {
      toggler.checked = false;
    };
  };

  const handleLogout = (e: SyntheticEvent) => {
    const toggler = document.querySelector('input');

    if (toggler?.checked === true) {
      toggler.checked = false;
    };

    localStorage.clear();
  };
   
  return (
        <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger"><div></div></div>
        <div className="menu">
          <div>
            <div>
              <ul>
               { 
                loggedInUser && loggedInUser.username !== ''
                ? <>
                    <li>Save</li> 
                    <li>Load</li> 
                    <li>Email</li> 
                    <li onClick={handleLogout}><Link to="/">Logout</Link></li> 
                  </>
                : <>
                    <li onClick={handleClick}><Link to="/login">Login</Link></li>
                  </>
               }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Navigation
