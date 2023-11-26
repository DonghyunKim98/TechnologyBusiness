import { Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { ModalHeader, Text, TextInput } from '@/atoms';
import { BasicLayout } from '@/layouts';
import { palette } from '@/utils';

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
  const { t } = useTranslation();

  // TODO : Use MutationIndicator Properly
  // useMutationIndicator([true])

  return (
    <BasicLayout>
      <ModalHeader left={{ type: 'icon' }} />
      <Stack space={32} paddingTop={32} style={{ flex: 1 }}>
        <Text fontWeight="700" fontSize="22" color="gray-900">
          로그인
        </Text>
        <TextInput label="아이디" placeholder="아이디를 입력해주세요" />
        <TextInput label="비밀번호" placeholder="아이디를 입력해주세요" />
      </Stack>
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
    </BasicLayout>
  );
};
