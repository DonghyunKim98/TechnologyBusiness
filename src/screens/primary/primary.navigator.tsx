import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { PrimaryCreditScreen } from './primary-credit';
import { PrimaryExerciseScheduleScreen } from './primary-exercise-schedule';
import { PrimarySearchExerciseScreen } from './primary-search-exercise';

import { Icon } from '@/atoms';
import { palette } from '@/utils';

export type PrimaryNavigatorParamLists = {
  PrimarySearchExerciseScreen: undefined;
  PrimaryExerciseScheduleScreen: undefined;
  PrimaryCreditScreen: undefined;
};

const Tab = createBottomTabNavigator<PrimaryNavigatorParamLists>();

export type PrimaryNavigatorProps = StackNavigationProp<
  RootStackParamList,
  'PrimaryStack'
>;
type PrimaryNavigatorRouteProps = RouteProp<RootStackParamList, 'PrimaryStack'>;

export const PrimaryNavigator = () => {
  const navigation = useNavigation<PrimaryNavigatorProps>();
  const route = useRoute<PrimaryNavigatorRouteProps>();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {},
        tabBarStyle: {
          height: 76,
          paddingBottom: 12,
          paddingTop: 12,
          backgroundColor: palette['white'],
        },
        tabBarActiveTintColor: palette['primary'],
        tabBarInactiveTintColor: palette['gray-400'],
        headerShown: false,
      }}
      initialRouteName="PrimarySearchExerciseScreen">
      <Tab.Screen
        name="PrimarySearchExerciseScreen"
        component={PrimarySearchExerciseScreen}
        options={{
          tabBarLabel: '운동찾기',
          tabBarIcon: ({ color }) => {
            return <Icon color={color} size={24} name="search-off" />;
          },
        }}
      />
      <Tab.Screen
        name="PrimaryExerciseScheduleScreen"
        component={PrimaryExerciseScheduleScreen}
        options={{
          tabBarLabel: '운동일정',
          tabBarIcon: ({ color }) => {
            return <Icon color={color} size={24} name="schedule" />;
          },
        }}
      />
      <Tab.Screen
        name="PrimaryCreditScreen"
        component={PrimaryCreditScreen}
        options={{
          tabBarLabel: '크레딧',
          tabBarIcon: ({ color }) => {
            return <Icon color={color} size={24} name="monetization-on" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
