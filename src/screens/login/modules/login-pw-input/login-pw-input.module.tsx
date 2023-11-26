import { isUndefined } from 'lodash';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { LoginForm } from '../../hooks';

import { TextInput } from '@/atoms';

type LoginPwInputModuleProps = {};

export const LoginPwInputModule = memo<LoginPwInputModuleProps>(() => {
  const { control } = useFormContext<LoginForm>();
  const {
    field: { onChange, value },
    fieldState,
  } = useController({ control, name: 'PassWord' });

  return (
    <TextInput
      label="비밀번호"
      placeholder="비밀번호를 입력해주세요"
      value={value}
      secureTextEntry
      onChangeText={onChange}
      autoCapitalize="none"
      error={!isUndefined(fieldState.error?.message)}
      errorMsg={fieldState.error?.message as string}
    />
  );
});
