import './Navigation.css' 

const Navigation = () => {
    return (
        <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger"><div></div></div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li><a href="#">Save</a></li>
                <li><a href="#">Load</a></li>
                <li><a href="#">Email</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Navigation
