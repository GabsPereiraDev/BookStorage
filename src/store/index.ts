
import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware from 'redux-saga'
import { StateBookStorage } from "./ducks/bookstorage/types";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApllicationState {
  bookStorage: StateBookStorage;
}


const sagaMiddleware=createSagaMiddleware()


const store: Store<ApllicationState> = createStore(rootReducer, applyMiddleware());

sagaMiddleware.run(rootSaga)

export default store;
