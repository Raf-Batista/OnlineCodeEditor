// @ts-nocheck
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { toast } from "react-toastify";
import {
  Action,
  UpdateCellAction,
  DeleteCellAction,
  MoveCellAction,
  InsertCellAfterAction,
} from "../actions";
import { CellTypes } from "../cell";
import { Direction } from "../direction";
import bundle from "../../bundler";

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  };
};

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};

export const insertCellAfter = (
  id: string | null,
  cellType: CellTypes
): InsertCellAfterAction => {
  return {
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id,
      type: cellType,
    },
  };
};

export const createBundle = (cellId: string, input: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BUNDLE_START,
      payload: {
        cellId,
      },
    });

    const result = await bundle(input);

    dispatch({
      type: ActionType.BUNDLE_COMPLETE,
      payload: {
        cellId,
        bundle: result,
      },
    });
  };
};

export const saveCode = (code: {}, userId: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SAVE_START,
    });

    try { 
      const URL = `${process.env.REACT_APP_URL}/users/${userId}/codes`;
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

export const signUpUser = (user: {}) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN_USER_START,
    });

    try {
      const URL = `${process.env.REACT_APP_URL}/users`;
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
      const URL = `${process.env.REACT_APP_URL}/sessions`;
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
