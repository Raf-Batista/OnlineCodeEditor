// @ts-nocheck
// import './Signup.css'
import { testAttr } from '../../test-utils.js';
import useForm from "../../hooks/useForm";
import { useActions } from "../../hooks/useActions";
import { Redirect, Link } from "react-router-dom";

  interface UserParams {
    username: string;
    password: string;
  }

const Signup: React.FC = ({ loggedIn }) => {
    const { signUpUser } = useActions();
    const initialValues: UserParams = { username: "", password: "" };
    const { values, handleChange, handleSubmit } = useForm(
      initialValues,
      signUpUser
    );

    return (
        <>
          { !loggedIn ? <div className="form-wrapper" {...testAttr("component-signup")}>
            <div className="form-wrapper-header">
              <h1>Signup</h1>
            </div>
    
            <form className="form-group" onSubmit={handleSubmit}>
              {/* @ts-ignore */}
              <input
                required
                autoComplete="off"
                type="text"
                name="username"
                onChange={handleChange}
                value={values.username}
                placeholder="USERNAME"
              />
              <label className="form-group-label">Username</label>
              {/* @ts-ignore */}
              {/* <input required minLength={6} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$" autocomplete="off" type="password" name="password" onChange={handleChange} value={values.password}  placeholder="password"/> */}
              {/* @ts-ignore */}
              <input
                required
                autoComplete="off"
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                placeholder="PASSWORD"
              />
              <label className="form-group-label">Password</label>
    
              <div className="form-group-button">
                <button className="btn">Signup</button>
              </div>
            </form>
            <div className="form-link">
              <span>Already have an account? <Link to='/login'>Login</Link></span>
            </div>
          </div> : <Redirect exact to="/" />}
        </>
        
    )
}

export default Signup
