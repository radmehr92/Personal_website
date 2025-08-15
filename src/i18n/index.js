import { createI18n } from 'vue-i18n';
import en from '../locale/en.json';
import fa from '../locale/fa.json';

const messages = {
    en,
    fa
};

const i18n = createI18n({
    locale: 'en', // زبان پیش‌فرض
    fallbackLocale: 'en', // زبان جایگزین
    messages
});

export default i18n;
