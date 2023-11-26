import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { LoginForm } from '../../hooks';

import { TextInput } from '@/atoms';

type LoginIdInputModuleProps = {};

export const LoginIdInputModule = memo<LoginIdInputModuleProps>(() => {
  const { control } = useFormContext<LoginForm>();
  const {
    field: { onChange, value },
    fieldState,
  } = useController({ control, name: 'ID' });

  return (
    <TextInput
      label="아이디"
      placeholder="아이디를 입력해주세요"
      onChangeText={onChange}
      value={value}
      error={!isUndefined(fieldState.error)}
      errorMsg={fieldState.error?.message as string}
      autoCapitalize="none"
    />
  );
});
