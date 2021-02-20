import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface UserState {
    username: string;
    userCode: {
        order: string[],
        data: {}
    }
}

const initialState = {
    username: '',
    userCode: {
        order: [], 
        data: {}
    }
};

const userReducer = produce((state: UserState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.LOGIN_USER_COMPLETE: 
            state.username = action.payload.username;
            state.userCode = action.payload.userCode;
            
            return state;
        default: 
            return state;
    };
});

export default userReducer;