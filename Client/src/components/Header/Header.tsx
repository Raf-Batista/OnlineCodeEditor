import "./Header.css";
import { testAttr } from '../../test-utils.js';

const Header = () => {
  return (
    <section {...testAttr("component-header")} id="header">
      <div className="header">
        <h1 {...testAttr("component-header-title")}>Code and Markdown Editor</h1>
        <a {...testAttr("component-header-help-button")} className="header-help button is-primary" href="#popup">
          Help
        </a>
        <div className="popup" id="popup">
          <div className="header-popup">
            <a href="#header" className="popup-close">
              &times;
            </a>
            <div className="popup-content">
              <ul>
                <li>
                  <h3>How to use the code editor</h3>
                  <span>
                    Click on the "code" button to add a code editor where you
                    can write JavaScript, ES6, and React
                  </span>
                  <span>
                    You can use the "show()" function to preview your ouput in
                    the preview window
                  </span>
                </li>

                <li>
                  <h3>How to use the text editor</h3>
                  <span>
                    Click on the "text" button to add a text editor where you
                    can write markdown text
                  </span>
                  <span>
                    You can click inside the text to start writing and click out
                    to stop writing markdown text
                  </span>
                </li>

                <li>
                    <h3>Notes about buttons</h3>
                  <span>
                    If you have no code or text cell you will always see buttons
                    to add one
                  </span>
                  <span>
                    You can add a cell before or after a current cell by
                    hovering above or below a cell and clicking the appropriate
                    button
                  </span>
                </li>

                <li>
                    <h3>Saving/Loading</h3>
                  <span>
                    You can click the menu button on the top left to sign up. If you are logged in you can save and load your code
                  </span>
                  <span>
                    you can save your text and code cells under a name. After saving, click "Load" from the menu button to see a list of your saved codes. 
                  </span>
                  <span>Note that you will lose unsaved code when loading</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
