import { Dayjs } from 'dayjs';
import { atom } from 'recoil';

type facilityReservationState = {
  title: string;
  iconName:
    | 'fitness-center'
    | 'self-improvement'
    | 'pool'
    | 'surfing'
    | 'snowboarding'
    | 'sports-tennis';
  date: Dayjs;
}[];

export const $facilityReservationState = atom<facilityReservationState>({
  key: 'facilityReservationState',
  default: [],
});
