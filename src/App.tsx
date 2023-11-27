import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import isToday from 'dayjs/plugin/isToday';
import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin';

import './providers/i18n';
import Toast from 'react-native-toast-message';

import {
  MutationIndicatorProvider,
  QueryClientProvider,
  RecoilProvider,
  UIProvider,
} from './providers';
import { RootNavigator } from './screens';
import { defaultStorage } from './utils';

if (__DEV__) {
  initializeMMKVFlipper({ default: defaultStorage });
}

export const App = () => {
  dayjs.extend(isToday);
  dayjs.locale('ko');

  return (
    <QueryClientProvider>
      <RecoilProvider>
        <UIProvider>
          <MutationIndicatorProvider>
            <RootNavigator />
            <Toast />
          </MutationIndicatorProvider>
        </UIProvider>
      </RecoilProvider>
    </QueryClientProvider>
  );
};
