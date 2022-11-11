import { createSlice } from '@reduxjs/toolkit';
import { CourseType } from '../../types/types';

type RettySlice = {
  dataRetty: CourseType[];
  loading: boolean;
};

const initialState: RettySlice = {
  dataRetty: [],
  loading: false,
};

const rettySlice = createSlice({
  name: 'course',
  initialState: initialState,
  reducers: {
    setData: (state, action) => ({
      ...state,
      dataRetty: action.payload.retty.courses,
    }),
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    getData() {},
  },
});

export const { setData, getData, setLoading } = rettySlice.actions;
export default rettySlice.reducer;