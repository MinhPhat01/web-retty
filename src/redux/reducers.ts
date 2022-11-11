import { combineReducers } from '@reduxjs/toolkit';
import rettySlice from './retty/rettySlice';
import seatSlice from './seat/seatSlice';

export const reducer = combineReducers({
  retty: rettySlice,
  seat: seatSlice,
});