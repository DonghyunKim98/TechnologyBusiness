import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { memo } from 'react';

import { RootStackParamList } from '../root.navigator';

import {
  FacilityReservationContentsModule,
  FacilityReservationHeaderModule,
} from './modules';

import { BasicLayout, ScrollView } from '@/layouts';

type FacilityReservationScreenProps = {};

export type FacilityReservationScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'FacilityReservationScreen'
>;

export type FacilityReservationScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'FacilityReservationScreen'
>;

export const FacilityReservationScreen = memo<FacilityReservationScreenProps>(
  () => {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <BasicLayout>
          <FacilityReservationHeaderModule />
          <FacilityReservationContentsModule />
        </BasicLayout>
      </ScrollView>
    );
  },
);
