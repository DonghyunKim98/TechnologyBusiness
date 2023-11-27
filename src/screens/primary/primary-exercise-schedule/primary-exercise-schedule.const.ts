import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';

import { palette } from '@/utils';

export const MATERIAL_TOP_TAB_NAVIGATOR_SCREEN_OPTIONS: MaterialTopTabNavigationOptions =
  {
    tabBarIndicatorContainerStyle: {
      position: 'absolute',
      top: 32,
      height: 2,
      backgroundColor: palette['gray-400'],
    },
    tabBarIndicatorStyle: {
      height: 2,
      backgroundColor: palette['primary'],
    },
    tabBarContentContainerStyle: {},
    tabBarItemStyle: {
      flex: 1,
      paddingVertical: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabBarStyle: {
      elevation: 0,
      backgroundColor: palette['gray-100'],
      height: 32,
    },
    tabBarAllowFontScaling: false,
    swipeEnabled: false,
  };
