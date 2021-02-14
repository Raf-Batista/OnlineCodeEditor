import { combineReducers } from 'redux';
import cellsReducer from './cellsReducer';
import bundlesReducer from './bundlesReducer';

const rootReducers = combineReducers({
    cells: cellsReducer,
    bundles: bundlesReducer
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;