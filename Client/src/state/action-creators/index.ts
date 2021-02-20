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

export const loginUser = (username: string, password: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGIN_USER_START
        });

        const URL = 'localhost:3000';
        const options = {
            method: 'POST',
            headers: {
                'Accepts': 'application/json'
            },
            body: JSON.stringify({user: {username: username, password: password}})
        };

        const response = await fetch(URL, options);

        const data = await response.json();

        if (data.errors) return dispatch({type: ActionType.LOGIN_USER_ERROR, payload: data.errors});

        dispatch({
            type: ActionType.LOGIN_USER_COMPLETE,
            payload: {username: data.username, userCode: data.userCode}
        });
    };
};