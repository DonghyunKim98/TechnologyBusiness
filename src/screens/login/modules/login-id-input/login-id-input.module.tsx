import { memo } from 'react';

import { TextInput } from '@/atoms';

type LoginIdInputModuleProps = {};

export const LoginIdInputModule = memo<LoginIdInputModuleProps>(() => {
  return <TextInput label="아이디" placeholder="아이디를 입력해주세요" />;
});
