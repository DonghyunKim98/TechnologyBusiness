import { memo } from 'react';

import { TextInput } from '@/atoms';

type LoginPwInputModuleProps = {};

export const LoginPwInputModule = memo<LoginPwInputModuleProps>(() => {
  return <TextInput label="아이디" placeholder="아이디를 입력해주세요" />;
});
