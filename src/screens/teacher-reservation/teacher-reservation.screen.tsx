import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import {
  TeacherReservationContentsModule,
  TeacherReservationHeaderModule,
} from './modules';

import { BasicLayout, ScrollView } from '@/layouts';

type TeacherReservationScreenProps = {};

export type TeacherReservationScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'TeacherReservationScreen'
>;

export type TeacherReservationScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'TeacherReservationScreen'
>;

export const TeacherReservationScreen = ({}: TeacherReservationScreenProps) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <BasicLayout>
        <TeacherReservationHeaderModule />
        <TeacherReservationContentsModule />
      </BasicLayout>
    </ScrollView>
  );
};
