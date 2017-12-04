import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, autoRehydrate } from "redux-persist";
import { AsyncStorage } from "react-native";
import { queryMiddleware } from "redux-query";
import createSagaMiddleware from "redux-saga";
import { initStart } from "../modules/ui/actions";
import apiMiddleware from "./apiMiddleware";

export const getQueries = state => state.queries;
export const getEntities = state => state.entities;

export default (rootReducer, rootSaga) => {
  const middleware = [];
  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);
  middleware.push(apiMiddleware);
  middleware.push(queryMiddleware(getQueries, getEntities));

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  const persistor = persistStore(store, null, () =>
    store.dispatch(initStart())
  );

  sagaMiddleware.run(rootSaga);

  return { persistor, store };
};
