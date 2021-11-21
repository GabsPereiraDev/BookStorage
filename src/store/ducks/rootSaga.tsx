import {all, takeLatest} from 'redux-saga/effects';
import { BookStorageTypes } from './bookstorage/types';
import { load } from './bookstorage/sagas';




export default function* rootSaga():any{
    return yield all([
        takeLatest(BookStorageTypes.LOAD_REQUEST, load),
      ]);
}