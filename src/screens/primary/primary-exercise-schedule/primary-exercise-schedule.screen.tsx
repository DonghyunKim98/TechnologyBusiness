import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';

import {
  PrimaryNavigatorProps,
  PrimaryNavigatorParamLists,
} from '../primary.navigator';

import { PrimaryExerciseScheduleTab } from './components';
import { MATERIAL_TOP_TAB_NAVIGATOR_SCREEN_OPTIONS } from './primary-exercise-schedule.const';
import {
  PrimaryExerciseClassScheduleScreen,
  PrimaryExerciseFacilityScheduleScreen,
} from './screens';

import { ModalHeader } from '@/atoms';
import { BasicLayout } from '@/layouts';

export type PrimaryExerciseScheduleScreenNavigatorProp =
  CompositeNavigationProp<
    PrimaryNavigatorProps,
    BottomTabNavigationProp<
      PrimaryNavigatorParamLists,
      'PrimaryExerciseScheduleScreen'
    >
  >;

export type PrimaryExerciseScheduleScreenRouteProp = RouteProp<
  PrimaryNavigatorParamLists,
  'PrimaryExerciseScheduleScreen'
>;

type PrimaryExerciseScheduleScreenProps = {};

export type PrimaryExerciseScheduleScreenTabParamList = {
  PrimaryExerciseFacilityScheduleScreen: undefined;
  PrimaryExerciseClassScheduleScreen: undefined;
};

const Tab =
  createMaterialTopTabNavigator<PrimaryExerciseScheduleScreenTabParamList>();

export const PrimaryExerciseScheduleScreen = () => {
  const navigation = useNavigation<PrimaryExerciseScheduleScreenProps>();

  return (
    <BasicLayout>
      <ModalHeader
        left={{
          type: 'icon-string',
          iconName: 'calendar-month',
          title: '운동 일정',
        }}
      />
      <Tab.Navigator
        style={{ marginTop: 24 }}
        initialRouteName="PrimaryExerciseFacilityScheduleScreen"
        screenOptions={MATERIAL_TOP_TAB_NAVIGATOR_SCREEN_OPTIONS}
        tabBar={PrimaryExerciseScheduleTab}>
        <Tab.Screen
          name="PrimaryExerciseFacilityScheduleScreen"
          options={() => ({
            tabBarLabel: '시설 예약',
          })}
          component={PrimaryExerciseFacilityScheduleScreen}
        />
        <Tab.Screen
          name="PrimaryExerciseClassScheduleScreen"
          options={() => ({
            tabBarLabel: '강습 예약',
          })}
          component={PrimaryExerciseClassScheduleScreen}
        />
      </Tab.Navigator>
    </BasicLayout>
  );
};
