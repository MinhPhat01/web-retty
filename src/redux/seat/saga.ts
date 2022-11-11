import { takeLatest } from 'redux-saga/effects';
import handleGetData from './handler';

import { getData } from './seatSlice';

export default function* seatSaga() {
  yield takeLatest(getData.type, handleGetData);
}