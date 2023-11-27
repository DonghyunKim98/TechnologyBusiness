import {
  PrimaryCreditContentsModule,
  PrimaryCreditHeaderModule,
} from './modules';

import { BasicLayout } from '@/layouts';

export const PrimaryCreditScreen = () => {
  return (
    <BasicLayout>
      <PrimaryCreditHeaderModule />
      <PrimaryCreditContentsModule />
    </BasicLayout>
  );
};
