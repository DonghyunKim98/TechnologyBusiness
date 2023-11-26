import { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type LoginFooterModuleProps = {};

export const LoginFooterModule = memo<LoginFooterModuleProps>(() => {
  return (
    <TouchableOpacity
      onPress={() => {}}
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
