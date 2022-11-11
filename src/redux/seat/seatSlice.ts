import { createSlice } from '@reduxjs/toolkit';
import { SeatType } from '../../types/types';

type SeatSlice = {
  dataSeat: SeatType[];
  loading: boolean;
};

const initialState: SeatSlice = {
  dataSeat: [],
  loading: false,
};

const seatSlice = createSlice({
  name: 'seat',
  initialState,
  reducers: {
    setData: (state, action) => ({
      ...state,
      dataSeat: action.payload.retty.seats,
    }),
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    getData() {},
  },
});

export const { setData, getData, setLoading } = seatSlice.actions;
export default seatSlice.reducer;