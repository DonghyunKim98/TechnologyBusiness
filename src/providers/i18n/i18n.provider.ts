import { use } from 'i18next';
import i18n, { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';

import { englishTranslation, koreanTranslation } from './resources';

// Default Namespace is translation
const localizationResources = {
  ko: { translation: koreanTranslation },
  en: { translation: englishTranslation },
} as const;

if (__DEV__) {
  use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: getLocales()[0].languageCode,
    debug: true,
    resources: localizationResources,
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false,
    },
  });
} else {
  use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: localizationResources,
    fallbackLng: 'ko',
  });
}

export default i18n;
