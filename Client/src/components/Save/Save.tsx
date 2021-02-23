//@ts-nocheck
import useForm from "../../hooks/useForm";
import { Redirect } from "react-router-dom";

interface SaveProps {
  save: (code: {title: string, order: string[], data: {}}, userId: number, loggedIn) => {}
  loggedIn: boolean
  setLoggedIn: (value: boolean) => {}
  userCode: {order: string[], data: {}}
  userId: number
}

const Save: React.FC<SaveProps> = ({ save, loggedIn, userCode, userId, history }) => {
  const initialValues = {title: ''};
  const { values, handleChange, handleSubmit } = useForm(initialValues);
  
  const handleSave = () => {
    const code = {
      ...userCode,
      title: values.title
    };

   save(code, userId);
   history.push('/codes')
  };

  return (
    <>
          { loggedIn ? <div className="form-wrapper">
            <div className="form-wrapper-header">
              <h1>Save</h1>
            </div>
    
            <form className="form-group" onSubmit={handleSubmit}>
              {/* @ts-ignore */}
              <input
                required
                autoComplete="off"
                type="text"
                name="title"
                onChange={handleChange}
                value={values.title}
                placeholder="Title"
              />
              <label className="form-group-label">Title</label>
              
              <div className="form-group-button">
                <button onClick={handleSave} className="btn">Save</button>
              </div>
            </form>
          </div> : <Redirect exact to="/" />}
        </>
  )
}

export default Save;
