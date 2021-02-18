import './Signin.css';
import useForm from '../hooks/useForm';
import signin from '../hooks/signin';

const Signin: React.FC = () => {
    interface UserParams {
        username: string;
        password: string;  
    }

    const initialValues: UserParams = {username: '', password: ''}
    const { values, handleChange, handleSubmit} = useForm(initialValues, signin);

    return (
        <div className="form-wrapper">
            
            <div className="form-wrapper-header">
                <h1>Signin</h1>
            </div>
     
            <form className="form-group" onSubmit={handleSubmit}>
                {/* @ts-ignore */}
                <input required autocomplete="off" type="text" name="username" onChange={handleChange} value={values.username}  placeholder="username"/>
                <label className="form-group-label">Username</label>
                {/* @ts-ignore */}
                {/* <input required minLength={6} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$" autocomplete="off" type="password" name="password" onChange={handleChange} value={values.password}  placeholder="password"/> */}
                {/* @ts-ignore */}
                <input required autocomplete="off" type="password" name="password" onChange={handleChange} value={values.password}  placeholder="password"/>
                <label className="form-group-label">Password</label>
               
                <div className="form-group-button">
                  <button className="btn">Create</button>
                </div>
             
            </form>
        </div>

    )
};

export default Signin;
