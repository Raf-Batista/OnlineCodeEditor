import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action, UpdateCellAction, DeleteCellAction, MoveCellAction, InsertCellAfterAction } from '../actions';
import { CellTypes } from '../cell';
import { Direction } from '../direction';
import bundle from '../../bundler';

export const updateCell = (id: string, content: string): UpdateCellAction => {
    return {
        type: ActionType.UPDATE_CELL,
        payload: {
            id,
            content
        }
    };
};

export const deleteCell = (id: string): DeleteCellAction => {
    return {
        type: ActionType.DELETE_CELL,
        payload: id
    };
};

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
    return {
        type: ActionType.MOVE_CELL,
        payload: {
            id, 
            direction
        }
    };
};

export const insertCellAfter = (id: string | null, cellType: CellTypes): InsertCellAfterAction => {
    return {
        type: ActionType.INSERT_CELL_AFTER,
        payload: {
            id,
            type: cellType
        }
    };
};

export const createBundle = (cellId: string, input: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BUNDLE_START,
            payload: {
                cellId
            }
        });

        const result = await bundle(input);

        dispatch({
            type: ActionType.BUNDLE_COMPLETE,
            payload: {
                cellId,
                bundle: result
            }
        });
    };
};

export const saveCode = (code: {}, userId: number) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SAVE_START
        });

        try {
            const URL = `http://localhost:3000/users/${userId}/codes`;
            const options = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    },
                body: JSON.stringify(code)
            };

            const response = await fetch(URL, options);

            const data = await response.json();

            if (data.errors) return dispatch({type: ActionType.SAVE_ERROR, payload: data.errors});
            
            localStorage.setItem('user', JSON.stringify(data));

            dispatch({
                type: ActionType.SAVE_COMPLETE
            });

            dispatch({
                type: ActionType.LOGIN_USER_COMPLETE,
                payload: data
            });

        } catch (error) {
            console.log(error)
        }      
    }
}


export const loadCode = (order: string[], data: {}) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOAD_START
        });

        dispatch({
            type: ActionType.LOAD_COMPLETE,
            payload: {
                order,
                data
            }
        })
    }
}

export const signUpUser = (user: {}) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGIN_USER_START
        });

        try {
            const URL = 'http://localhost:3000/users';
            const options = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    },
                body: JSON.stringify(user)
            };

            const response = await fetch(URL, options);

            const data = await response.json();

            if (data.errors) return dispatch({type: ActionType.LOGIN_USER_ERROR, payload: data.errors});
            
            localStorage.setItem('user', JSON.stringify(data));

            dispatch({
                type: ActionType.LOGIN_USER_COMPLETE,
                payload: {username: data.username, codes: data.codes}
            });
        } catch (error) {
            console.log(error)
        }      
    };
};

export const loginUser = (user: {}) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGIN_USER_START
        });

        try {
            const URL = 'http://localhost:3000/sessions';
            const options = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    },
                body: JSON.stringify(user)
            };

            const response = await fetch(URL, options);

            const data = await response.json();

            if (data.errors) return dispatch({type: ActionType.LOGIN_USER_ERROR, payload: data.errors});
            
            localStorage.setItem('user', JSON.stringify(data));

            dispatch({
                type: ActionType.LOGIN_USER_COMPLETE,
                payload: {username: data.username, codes: data.codes}
            });
        } catch (error) {
            console.log(error)
        }      
    };
};

export const checkIfLoggedIn = (user: {username: string, codes: [{title: string, order: string[], data: string[]}]}) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CHECK_IF_LOGGED_IN,
            payload: {
                username: user.username,
                codes: user.codes
            }
        });
    };
};