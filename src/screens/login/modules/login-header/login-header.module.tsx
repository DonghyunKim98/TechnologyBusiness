import { Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { ModalHeader, Text } from '@/atoms';

type LoginHeaderModuleProps = {};

export const LoginHeaderModule = memo<LoginHeaderModuleProps>(() => {
  const navigation = useNavigation();

  return (
    <Stack space={32}>
      <ModalHeader
        left={{ type: 'icon' }}
        onPressExit={() => {
          navigation.goBack();
        }}
      />
      <Text fontWeight="700" fontSize="22" color="gray-900">
        로그인
      </Text>
    </Stack>
  );
});
