import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { FacilitySelectScreen } from './facility-select';
import { LandingScreen } from './landing';
import { LoginScreen } from './login';
import { PrimaryNavigator, PrimaryNavigatorParamLists } from './primary';
import { WebViewScreen } from './web-view';

export type RootStackParamList = {
  LandingScreen: undefined;
  LoginScreen: undefined;
  PrimaryStack: NavigatorScreenParams<PrimaryNavigatorParamLists>;
  WebViewScreen: { url: string };
  FacilitySelectScreen: {
    iconName:
      | 'fitness-center'
      | 'self-improvement'
      | 'pool'
      | 'surfing'
      | 'snowboarding'
      | 'sports-tennis';
    location: '수원/화성' | '건대입구/성수/왕십리';
  };
};

type RootNavigatorProps = {};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = ({}: RootNavigatorProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
        <Stack.Screen name="PrimaryStack" component={PrimaryNavigator} />
        <Stack.Screen
          name="FacilitySelectScreen"
          component={FacilitySelectScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
