import { fromNodes } from 'jscodeshift/src/Collection';
import { ActionType } from '../action-types';
import { CellTypes } from '../cell';
import { Direction } from '../direction';

export interface MoveCellAction {
    type: ActionType.MOVE_CELL;
    payload: {
        id: string;
        direction: Direction;
    }
}

export interface DeleteCellAction {
    type: ActionType.DELETE_CELL;
    payload: string;
}

export interface InsertCellAfterAction {
    type: ActionType.INSERT_CELL_AFTER;
    payload: {
        id: string | null;
        type: CellTypes;
    }
}

export interface UpdateCellAction {
    type: ActionType.UPDATE_CELL;
    payload: {
        id: string;
        content: string;
    }
}

export interface BundleStartAction {
    type: ActionType.BUNDLE_START,
    payload: {
        cellId: string;
    }
}

export interface BundleCompleteAction {
    type: ActionType.BUNDLE_COMPLETE,
    payload: {
        cellId: string,
        bundle: {
            code: string,
            error: string
        }
    }
}

export interface LoadCodeStartAction {
    type: ActionType.LOAD_START
}

export interface LoadCodeCompleteAction {
    type: ActionType.LOAD_COMPLETE, 
    payload: {
        order: string[],
        data: {}
    }
}

export interface SaveCodeStartAction {
    type: ActionType.SAVE_START
}

export interface SaveCodeCompleteAction {
    type: ActionType.SAVE_COMPLETE
}

export interface SaveCodeErrorAction {
    type: ActionType.SAVE_ERROR
}


export interface LoginUserStartAction {
    type: ActionType.LOGIN_USER_START
}

export interface LoginUserCompleteAction {
    type: ActionType.LOGIN_USER_COMPLETE,
    payload: {
        username: string, 
        codes: [ { title: string, order: string[], data: string[]} | null ]
    }
}

export interface LoginUserErrorAction {
    type: ActionType.LOGIN_USER_ERROR,
    payload: {
        errors: string
    }
}

export interface CheckIfLoggedInAction {
    type: ActionType.CHECK_IF_LOGGED_IN,
    payload: {
        username: string,
        codes: [ { title: string, order: string[], data: string[]} | null ]
    }
}

export type Action = 
    MoveCellAction 
    | DeleteCellAction 
    | InsertCellAfterAction 
    | UpdateCellAction
    | BundleStartAction
    | BundleCompleteAction
    | LoadCodeStartAction
    | LoadCodeCompleteAction
    | LoginUserStartAction
    | LoginUserCompleteAction
    | LoginUserErrorAction
    | CheckIfLoggedInAction
    | SaveCodeStartAction
    | SaveCodeCompleteAction
    | SaveCodeErrorAction;