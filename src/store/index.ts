import { StateAuthorsStorage } from "./ducks/authors/types";

import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { StateBookStorage } from "./ducks/books/types";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
  data: StateBookStorage;
  authors: StateAuthorsStorage;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
