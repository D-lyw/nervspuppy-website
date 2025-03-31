import { getRequestConfig } from 'next-intl/server';
import { locales } from './config';

export default getRequestConfig(async () => ({
  messages: (await import(`../messages/${locales[0]}.json`)).default,
  timeZone: 'Asia/Shanghai'
})); 