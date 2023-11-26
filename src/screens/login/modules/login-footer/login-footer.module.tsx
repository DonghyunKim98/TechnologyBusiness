import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';

import { LoginForm } from '../../hooks';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type LoginFooterModuleProps = {};

export const LoginFooterModule = memo<LoginFooterModuleProps>(() => {
  const { formState, handleSubmit } = useFormContext<LoginForm>();
  const { isDirty, isValid } = formState;

  const isLoginPossible = isDirty && isValid;

  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14,
        backgroundColor: isLoginPossible
          ? palette['primary']
          : palette['disabled-bg'],
        borderRadius: 8,
      }}>
      <Text
        fontWeight="600"
        fontSize="14"
        color={isLoginPossible ? 'white' : 'disable-button'}>
        로그인
      </Text>
    </TouchableOpacity>
  );
});
