import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import monitorReducersEnhancer from "./enhancers/monitorReducer";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./reducers";
// import * as actionCreators from './action-creators';

export const store = (preloadedState: {}) => {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
/*
  Comment out above code and uncomment this to trace redux actions. This is temporary until a solution can be 
  found using the above code

  const composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25,
  });
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
  );
*/
  return store;
};
