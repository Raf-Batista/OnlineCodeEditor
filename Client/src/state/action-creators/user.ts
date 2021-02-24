// @ts-nocheck
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { toast } from "react-toastify";
import { Action } from "../actions";

export const signUpUser = (user: {}) => {
    return async (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionType.LOGIN_USER_START,
      });
  
      try {
        const URL = `${process.env.REACT_APP_URL}/users` || 'http://localhost:3000$/users';
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(user),
        };
  
        const response = await fetch(URL, options);
  
        const data = await response.json();
  
        if (data.errors) {
          
          toast.error(data.errors, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          
          return dispatch({
              type: ActionType.LOGIN_USER_ERROR,
              payload: data.errors,
            });
        }
     
  
        localStorage.setItem("user", JSON.stringify(data));
  
        dispatch({
          type: ActionType.LOGIN_USER_COMPLETE,
          payload: { username: data.username, codes: data.codes },
        });
  
        toast.success("Account Created", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
  
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  export const loginUser = (user: {}) => {
    return async (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionType.LOGIN_USER_START,
      });
  
      try {
        const URL = `${process.env.REACT_APP_URL}/sessions` || 'http://localhost:3000/sessions';
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(user),
        };
  
        const response = await fetch(URL, options);
  
        const data = await response.json();
  
        if (data.errors) {
  
          toast.error(data.errors, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
  
            return dispatch({
              type: ActionType.LOGIN_USER_ERROR,
              payload: data.errors,
            });
        }
  
  
        localStorage.setItem("user", JSON.stringify(data));
  
        dispatch({
          type: ActionType.LOGIN_USER_COMPLETE,
          payload: { username: data.username, codes: data.codes },
        });
  
        toast.success("Login Successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  export const logoutUser = () => {
      return async (dispatch: Dispatch<Action>) => {
  
          try {
              localStorage.clear();
              toast.info("You Have Logged Out", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
  
              dispatch({
                  type: ActionType.LOGOUT_USER_COMPLETE
              });
          } catch (error) {
              console.log(error)
          }
    
      }
  }
  
  export const checkIfLoggedIn = (user: {
    username: string;
    codes: [{ title: string; order: string[]; data: string[] }];
  }) => {
    return async (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionType.CHECK_IF_LOGGED_IN,
        payload: {
          username: user.username,
          codes: user.codes,
        },
      });
    };
  };