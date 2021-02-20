import { combineReducers } from 'redux';
import cellsReducer from './cellsReducer';
import bundlesReducer from './bundlesReducer';
import userReducer from './userReducer';

const rootReducers = combineReducers({
    cells: cellsReducer,
    bundles: bundlesReducer,
    user: userReducer
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;