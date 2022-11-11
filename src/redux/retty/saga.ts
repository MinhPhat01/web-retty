import { takeLatest } from 'redux-saga/effects';
import handleGetData from './handler';
import { getData } from './rettySlice';

export default function* rettySaga() {
  yield takeLatest(getData.type, handleGetData);
}