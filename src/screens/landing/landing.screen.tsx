import { Box, Stack } from '@mobily/stacks';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { Text } from '@/atoms';
import { BasicLayout } from '@/layouts';
import { palette } from '@/utils';

export type LandingScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'LandingScreen'
>;

export type LandingScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'LandingScreen'
>;

export const LandingScreen = () => {
  const navigation = useNavigation<LandingScreenNavigationProps>();

  return (
    <BasicLayout>
      <Box flex="fluid">
        <Stack space={48}>
          <Text fontWeight="700" fontSize="32" color="primary">
            운동한사발
          </Text>
        </Stack>
      </Box>
      <Stack>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 14,
            backgroundColor: palette['primary'],
            borderRadius: 8,
          }}>
          <Text fontWeight="600" fontSize="14" color="white">
            로그인
          </Text>
        </TouchableOpacity>
      </Stack>
    </BasicLayout>
  );
};
