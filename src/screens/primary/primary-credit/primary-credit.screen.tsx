import { ModalHeader } from '@/atoms';
import { BasicLayout } from '@/layouts';

export const PrimaryCreditScreen = () => {
  return (
    <BasicLayout>
      <ModalHeader
        left={{
          type: 'icon-string',
          iconName: 'monetization-on',
          title: '크레딧',
        }}
      />
    </BasicLayout>
  );
};
