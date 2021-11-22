import { all, takeLatest, fork } from "redux-saga/effects";
import { BookStorageTypes } from "./books/types";
import { AuthorsStorageTypes } from "./authors/types";
import { loadBooks } from "./books/sagas";
import { loadAuthors } from "./authors/sagas";

export default function* rootSaga(): any {
  return yield all([takeLatest(BookStorageTypes.LOAD_REQUEST, loadBooks)]);
}

