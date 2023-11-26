import { Stack } from '@mobily/stacks';
import { memo } from 'react';

import { ModalHeader, Text } from '@/atoms';

type LoginHeaderModuleProps = {};

export const LoginHeaderModule = memo<LoginHeaderModuleProps>(() => {
  return (
    <Stack space={32}>
      <ModalHeader left={{ type: 'icon' }} />
      <Text fontWeight="700" fontSize="22" color="gray-900">
        로그인
      </Text>
    </Stack>
  );
});
