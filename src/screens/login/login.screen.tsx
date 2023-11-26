import { Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FormProvider } from 'react-hook-form';

import { RootStackParamList } from '../root.navigator';

import { useLoginForm } from './hooks';
import {
  LoginFooterModule,
  LoginHeaderModule,
  LoginIdInputModule,
  LoginPwInputModule,
} from './modules';

import { BasicLayout } from '@/layouts';

type LoginScreenProps = {};

export type LoginScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

export type LoginScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'LoginScreen'
>;

export const LoginScreen = ({}: LoginScreenProps) => {
  const methods = useLoginForm();

  return (
    <FormProvider {...methods}>
      <BasicLayout>
        <LoginHeaderModule />
        <Stack space={32} paddingTop={32} style={{ flex: 1 }}>
          <LoginIdInputModule />
          <LoginPwInputModule />
        </Stack>
        <LoginFooterModule />
      </BasicLayout>
    </FormProvider>
  );
};
