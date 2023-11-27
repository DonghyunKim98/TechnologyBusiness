import { memo } from 'react';

import { ModalHeader } from '@/atoms';

type PrimaryCreditHeaderModuleProps = {};

export const PrimaryCreditHeaderModule = memo<PrimaryCreditHeaderModuleProps>(
  () => {
    return (
      <ModalHeader
        left={{
          type: 'icon-string',
          iconName: 'monetization-on',
          title: '크레딧',
        }}
      />
    );
  },
);
