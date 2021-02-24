// @ts-nocheck
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { toast } from "react-toastify";
import { Action } from "../actions";

export const saveCode = (code: {}, userId: number) => {
    return async (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionType.SAVE_START,
      });
  
      try { 
        const URL = `${process.env.REACT_APP_URL}/users/${userId}/codes` || `http://localhost:3000${userId}/codes`;
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(code),
        };
  
        const response = await fetch(URL, options);
  
        const data = await response.json();
  
        if (data.errors) {
          toast.error("Error Saving", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return dispatch({ type: ActionType.SAVE_ERROR, payload: data.errors });
        }
  
        localStorage.setItem("user", JSON.stringify(data));
  
        dispatch({
          type: ActionType.SAVE_COMPLETE,
        });
  
        dispatch({
          type: ActionType.LOGIN_USER_COMPLETE,
          payload: data,
        });
  
        toast.success("Code Saved", {
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
  
  export const loadCode = (order: string[], data: {}) => {
    return async (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionType.LOAD_START,
      });
  
      dispatch({
        type: ActionType.LOAD_COMPLETE,
        payload: {
          order,
          data,
        },
      });
  
      toast.success("Code Loaded", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
  
    };
  };