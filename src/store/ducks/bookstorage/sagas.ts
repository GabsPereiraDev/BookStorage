import {call, put} from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSuccces, loadFailure } from './actions';



export function* load():any{
    try{
        const response = yield call(api.get, 'author')

        yield put(loadSuccces(response.data))
}catch(error){
    yield put(loadFailure())
}}

