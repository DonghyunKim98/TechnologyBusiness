import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { LandingContentsModule, LandingFooterModule } from './modules';

import { BasicLayout } from '@/layouts';

type LandingScreenProps = {};

export type LandingScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'LandingScreen'
>;

export type LandingScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'LandingScreen'
>;

export const LandingScreen = ({}: LandingScreenProps) => {
  const navigation = useNavigation<LandingScreenNavigationProps>();

  return (
    <BasicLayout>
      <LandingContentsModule />
      <LandingFooterModule />
    </BasicLayout>
  );
};
