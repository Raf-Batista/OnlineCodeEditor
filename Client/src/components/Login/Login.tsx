// @ts-nocheck
import "./Login.css";
import useForm from "../../hooks/useForm";
import { useActions } from "../../hooks/useActions";
import { Redirect, Link } from "react-router-dom";

const Login: React.FC = ({ loggedIn }) => {
  interface UserParams {
    username: string;
    password: string;
  }

  const { loginUser } = useActions();
  const initialValues: UserParams = { username: "", password: "" };
  const { values, handleChange, handleSubmit } = useForm(
    initialValues,
    loginUser
  );

  return (
      <>
        {!loggedIn ?  <div className="form-wrapper">
        <div className="form-wrapper-header">
          <h1>Login</h1>
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
            placeholder="username"
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
            placeholder="password"
          />
          <label className="form-group-label">Password</label>
          <div className="form-group-button">
            <button className="btn">Login</button>
          </div>
        </form>
        <div className="form-link">
          <span>Don't have an account? <Link to='/signup'>Signup</Link></span>
        </div>
      </div>  : <Redirect exact to="/" />}
          
    </>
  );
};

export default Login;
