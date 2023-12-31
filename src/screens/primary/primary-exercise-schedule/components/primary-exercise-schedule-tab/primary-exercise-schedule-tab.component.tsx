import { Box } from '@mobily/stacks';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type PrimaryExerciseScheduleTabProps = MaterialTopTabBarProps & {};

export const PrimaryExerciseScheduleTab = ({
  state,
  descriptors,
  navigation,
  position,
}: PrimaryExerciseScheduleTabProps) => {
  return (
    <Box
      direction="row"
      style={{ backgroundColor: palette['gray-200'], borderRadius: 16 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const label = options.tabBarLabel as string;

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[
              {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: 32,
                borderRadius: 16,
              },
              isFocused && { backgroundColor: palette['primary'] },
            ]}
            key={index}>
            <Text
              fontSize="12"
              color={isFocused ? 'white' : 'gray-400'}
              fontWeight={isFocused ? '700' : '500'}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </Box>
  );
};
