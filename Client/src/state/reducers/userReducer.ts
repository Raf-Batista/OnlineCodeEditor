import produce from "immer";
import { ActionType } from "../action-types";
import { Action } from "../actions";

interface UserState {
  username: string;
  codes: any;
}

const initialState = {
  username: "",
  codes: [{ title: "", order: [""], data: [""] }],
};

const userReducer = produce(
  (state: UserState = initialState, action: Action) => {
    switch (action.type) {
      case ActionType.CHECK_IF_LOGGED_IN:
        state.username = action.payload.username;
        state.codes = action.payload.codes;

        return state;
      case ActionType.LOGIN_USER_COMPLETE:
        state.username = action.payload.username;
        state.codes = action.payload.codes;

        return state;
      case ActionType.LOGOUT_USER_COMPLETE:
        state = initialState;

        return state;
      default:
        return state;
    }
  }
);

export default userReducer;
