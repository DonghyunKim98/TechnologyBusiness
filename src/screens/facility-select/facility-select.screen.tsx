import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { FacilitySelectHeaderModule } from './modules';

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
  const navigation = useNavigation<FacilitySelectScreenNavigationProps>();
  const {
    params: { iconName, location },
  } = useRoute<FacilitySelectScreenNavigationRouteProps>();

  return (
    <BasicLayout>
      <FacilitySelectHeaderModule />
    </BasicLayout>
  );
};
