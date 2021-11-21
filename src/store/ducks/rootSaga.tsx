import {all, takeLatest} from 'redux-saga/effects';
import { BookStorageTypes } from './bookstorage/types';
import { load } from './bookstorage/sagas';



export default function* rootSaga():any{
    const  rootSaga = yield all([
        takeLatest(BookStorageTypes.LOAD_REQUEST, load)
    ])
    return rootSaga
}