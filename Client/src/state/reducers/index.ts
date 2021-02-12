import { combineReducers } from 'redux';
import cellsReducer from './cellsReducer';

const rootReducers = combineReducers({
    cells: cellsReducer
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;