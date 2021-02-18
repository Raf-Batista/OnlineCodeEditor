import './Navigation.css';
import { Link, Redirect } from 'react-router-dom'; 
import { SyntheticEvent } from 'react';

interface NavigationProps {
  loggedIn: boolean;
  user: {}
}

const Navigation: React.FC<NavigationProps> = ({ loggedIn, user }) => {
  
  const handleClick = (e: SyntheticEvent) => {
    const toggler = document.querySelector('input');

    if (toggler?.checked === true) {
      toggler.checked = false;
    };
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
                loggedIn 
                ? <>
                    <li>Save</li> 
                    <li>Load</li> 
                    <li>Email</li> 
                    <li>Logout</li> 
                  </>
                : <>
                    <li onClick={handleClick}><Link to="/signin">Signin</Link></li>
                  </>
               }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Navigation
