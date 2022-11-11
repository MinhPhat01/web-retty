import axios from 'axios';
import { urlRetty } from '../constants/urlRetty';

import { CourseType } from '../types/types';

export default function requestGetData() {
  return axios.request<CourseType[], CourseType[]>({
    method: 'GET',
    url: urlRetty,
  });
}