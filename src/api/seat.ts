import axios from 'axios';
import { urlRetty } from '../constants/urlRetty';
import { SeatType } from '../types/types';

export default function requestGetSeat() {
  return axios.request<SeatType[], SeatType[]>({
    method: 'GET',
    url: urlRetty,
  });
}