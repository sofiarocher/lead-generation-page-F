const supportedLngs = ['es', 'en'];
import themeConfig from 'theme.config';
export const ni18nConfig = {
    fallbackLng: ['es' || themeConfig.locale  ],
    supportedLngs,
    ns: ['translation'],
    react: { useSuspense: false },
};
