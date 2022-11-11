import { all, fork } from 'redux-saga/effects';
import rettySaga from './retty/saga';
import seatSaga from './seat/saga';

export default function* rootSaga() {
  yield all([fork(rettySaga)]);
  yield all([fork(seatSaga)]);
}