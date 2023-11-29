import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { TeacherSelectHeaderModule } from './modules';

import { BasicLayout } from '@/layouts';

type TeacherSelectScreenProps = {};

export type TeacherSelectScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'TeacherSelectScreen'
>;

export type TeacherSelectScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'TeacherSelectScreen'
>;

export const TeacherSelectScreen = ({}: TeacherSelectScreenProps) => {
  return (
    <BasicLayout>
      <TeacherSelectHeaderModule />
    </BasicLayout>
  );
};
