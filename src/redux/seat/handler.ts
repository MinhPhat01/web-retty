import { call, put } from 'redux-saga/effects';
import requestGetSeat from '../../api/seat';
import { SeatType } from '../../types/types';
import { setData, setLoading } from './seatSlice';

export default function* handleGetData() {
  try {
    const response: {
      data: SeatType[];
    } = yield call(requestGetSeat);
    yield put(setLoading(true));
    yield put(setData(response.data));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}