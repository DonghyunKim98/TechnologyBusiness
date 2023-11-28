import {
  Able_GYM_IMG,
  HEALTH_GYM_IMG,
  PARK_GYM_IMG,
  POOL1_IMG,
  POOL2_IMG,
  SNOW_BOARDING1_IMG,
  SURFING1_IMG,
  TENNIS_IMG,
  YOGA1_IMG,
  YOGA2_IMG,
} from '@/assets';

export const mapIconNameByTitle = {
  'fitness-center': '피트니스',
  'self-improvement': '요가',
  pool: '수영',
  surfing: '서핑',
  snowboarding: '스키 & 보드',
  'sports-tennis': '테니스',
};

export const FACILITY_DATA = {
  '수원/화성': {
    'fitness-center': [
      {
        title: '에이블짐 한양대점',
        rating: '4.4',
        specificLocation: '성동구 마조로 30 지하1층',
        img: Able_GYM_IMG,
      },
      {
        title: '건강과땀 한양대점',
        rating: '4.2',
        specificLocation: '성동구 왕십리로 222',
        img: HEALTH_GYM_IMG,
      },
      {
        title: '파크짐 한양대점',
        rating: '3.5',
        specificLocation: '성동구 왕십리로 223 B1,B2층',
        img: PARK_GYM_IMG,
      },
    ],
    'self-improvement': [
      {
        title: '요요 건대입구점',
        rating: '3.5',
        specificLocation: '성동구 건대입구로 113 B1,B2층',
        img: YOGA1_IMG,
      },
      {
        title: 'Yo Yo Yo',
        rating: '4.5',
        specificLocation: '성동구 서울숲로 234',
        img: YOGA2_IMG,
      },
    ],
    pool: [
      {
        title: '성동구 청소년회관 수영소',
        rating: '3.2',
        specificLocation: '성동구 마장로 12',
        img: POOL1_IMG,
      },
      {
        title: '올림픽 수영 체육관',
        rating: '4.1',
        specificLocation: '성동구 왕십리로 222',
        img: POOL2_IMG,
      },
    ],
    surfing: [
      {
        title: '왕십리 서퍼',
        rating: '4.8',
        specificLocation: '성동구 왕십리역 엔터식스 7층',
        img: SURFING1_IMG,
      },
    ],
    snowboarding: [
      {
        title: '왕십리 보드',
        rating: '3.2',
        specificLocation: '성동구 왕십리역 엔터식스 6층',
        img: SNOW_BOARDING1_IMG,
      },
    ],
    'sports-tennis': [
      {
        title: '왕Arena',
        rating: '4.5',
        specificLocation: '성동구 서울숲로 11',
        img: TENNIS_IMG,
      },
    ],
  },
  '건대입구/성수/왕십리': {
    'fitness-center': [
      {
        title: '에이블짐 한양대점',
        rating: '4.4',
        specificLocation: '성동구 마조로 30 지하1층',
        img: Able_GYM_IMG,
      },
      {
        title: '건강과땀 한양대점',
        rating: '4.2',
        specificLocation: '성동구 왕십리로 222',
        img: HEALTH_GYM_IMG,
      },
      {
        title: '파크짐 한양대점',
        rating: '3.5',
        specificLocation: '성동구 왕십리로 223 B1,B2층',
        img: PARK_GYM_IMG,
      },
    ],
    'self-improvement': [
      {
        title: '요요 건대입구점',
        rating: '3.5',
        specificLocation: '성동구 건대입구로 113 B1,B2층',
        img: YOGA1_IMG,
      },
      {
        title: 'Yo Yo Yo',
        rating: '4.5',
        specificLocation: '성동구 서울숲로 234',
        img: YOGA2_IMG,
      },
    ],
    pool: [
      {
        title: '성동구 청소년회관 수영소',
        rating: '3.2',
        specificLocation: '성동구 마장로 12',
        img: POOL1_IMG,
      },
      {
        title: '올림픽 수영 체육관',
        rating: '4.1',
        specificLocation: '성동구 왕십리로 222',
        img: POOL2_IMG,
      },
    ],
    surfing: [
      {
        title: '왕십리 서퍼',
        rating: '4.8',
        specificLocation: '성동구 왕십리역 엔터식스 7층',
        img: SURFING1_IMG,
      },
    ],
    snowboarding: [
      {
        title: '왕십리 보드',
        rating: '3.2',
        specificLocation: '성동구 왕십리역 엔터식스 6층',
        img: SNOW_BOARDING1_IMG,
      },
    ],
    'sports-tennis': [
      {
        title: '왕Arena',
        rating: '4.5',
        specificLocation: '성동구 서울숲로 11',
        img: TENNIS_IMG,
      },
    ],
  },
};
