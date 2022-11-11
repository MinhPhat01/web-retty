import requestGetData from '../../api/course';
import { CourseType } from '../../types/types';
import { call, put } from 'redux-saga/effects';
import { setData, setLoading } from './rettySlice';

export default function* handleGetData() {
  try {
    const response: {
      data: CourseType[];
    } = yield call(requestGetData);

    yield put(setLoading(true));
    yield put(setData(response.data));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}