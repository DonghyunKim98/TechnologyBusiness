import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import {
  FacilitySelectContentModule,
  FacilitySelectHeaderModule,
} from './modules';

import { BasicLayout } from '@/layouts';

type FacilitySelectScreenProps = {};

export type FacilitySelectScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'FacilitySelectScreen'
>;

export type FacilitySelectScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'FacilitySelectScreen'
>;

export const FacilitySelectScreen = ({}: FacilitySelectScreenProps) => {
  return (
    <BasicLayout>
      <FacilitySelectHeaderModule />
      <FacilitySelectContentModule />
    </BasicLayout>
  );
};
