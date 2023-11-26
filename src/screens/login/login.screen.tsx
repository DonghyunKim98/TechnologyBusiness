import { useTranslation } from 'react-i18next';

import { ModalHeader } from '@/atoms';
import { BasicLayout } from '@/layouts';

type LoginScreenProps = {};

export const LoginScreen = ({}: LoginScreenProps) => {
  const { t } = useTranslation();

  // TODO : Use MutationIndicator Properly
  // useMutationIndicator([true])

  return (
    <BasicLayout>
      <ModalHeader left={{ type: 'icon' }} />
    </BasicLayout>
  );
};
