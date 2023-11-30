import { atom } from 'recoil';

type creditState = {
  credit: number;
};

export const $creditState = atom<creditState>({
  key: 'creditState',
  default: {
    credit: 0,
  },
});
