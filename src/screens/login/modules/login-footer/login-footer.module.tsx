import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';

import { LoginForm } from '../../hooks';
import { LoginScreenNavigationProps } from '../../login.screen';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type LoginFooterModuleProps = {};

export const LoginFooterModule = memo<LoginFooterModuleProps>(() => {
  const navigation = useNavigation<LoginScreenNavigationProps>();

  const { formState, handleSubmit } = useFormContext<LoginForm>();
  const { isDirty, isValid } = formState;

  const isLoginPossible = isDirty && isValid;

  const handlePressLoginButton = () => {
    handleSubmit(() => {
      navigation.reset({
        index: 1,
        routes: [
          {
            name: 'PrimaryStack',
            params: { screen: 'PrimarySearchExerciseScreen' },
          },
        ],
      });
    })();
  };

  return (
    <TouchableOpacity
      onPress={handlePressLoginButton}
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
