import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

import {
  PrimaryNavigatorParamLists,
  PrimaryNavigatorProps,
} from '../primary.navigator';

import {
  PrimarySearchExerciseContents,
  PrimarySearchExerciseHeaderModule,
} from './modules';

import { BasicLayout } from '@/layouts';

export type PrimarySearchExerciseScreenNavigatorProp = CompositeNavigationProp<
  PrimaryNavigatorProps,
  BottomTabNavigationProp<
    PrimaryNavigatorParamLists,
    'PrimarySearchExerciseScreen'
  >
>;

export type PrimarySearchExerciseScreenRouteProp = RouteProp<
  PrimaryNavigatorParamLists,
  'PrimarySearchExerciseScreen'
>;

type PrimarySearchExerciseScreenProps = {};

export const PrimarySearchExerciseScreen =
  ({}: PrimarySearchExerciseScreenProps) => {
    return (
      <BasicLayout>
        <PrimarySearchExerciseHeaderModule />
        <PrimarySearchExerciseContents />
      </BasicLayout>
    );
  };
