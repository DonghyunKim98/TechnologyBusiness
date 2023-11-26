import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { LandingScreenNavigationProps } from '../../landing.screen';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type LandingFooterModuleProps = {};

export const LandingFooterModule = memo<LandingFooterModuleProps>(() => {
  const navigation = useNavigation<LandingScreenNavigationProps>();

  const handlePressLoginButton = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <TouchableOpacity
      onPress={handlePressLoginButton}
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
  );
});
