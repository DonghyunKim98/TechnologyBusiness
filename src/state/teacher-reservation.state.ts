import { Dayjs } from 'dayjs';
import { atom } from 'recoil';

type teacherReservationState = {
  name: string;
  facility: string;
  date: Dayjs;
}[];

export const $teacherReservationState = atom<teacherReservationState>({
  key: 'teacherReservationState',
  default: [],
});
