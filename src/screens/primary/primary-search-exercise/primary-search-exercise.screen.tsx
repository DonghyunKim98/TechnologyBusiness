import { useState } from 'react';

import {
  PrimarySearchExerciseContents,
  PrimarySearchExerciseHeaderModule,
} from './modules';

import { BasicLayout } from '@/layouts';

export const PrimarySearchExerciseScreen = () => {
  const [isBannerErased, setIsBannerErased] = useState(false);

  return (
    <BasicLayout>
      <PrimarySearchExerciseHeaderModule />
      <PrimarySearchExerciseContents />
    </BasicLayout>
  );
};
