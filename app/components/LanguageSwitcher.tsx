'use client'

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales } from '../../i18n/config';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    // 移除当前语言前缀
    const currentPathname = pathname.replace(`/${locale}`, '') || '/';
    
    // 构建新的 URL
    const newPath = `/${newLocale}${currentPathname}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleChange(loc)}
          className={`px-2 py-1 text-sm rounded-md ${
            locale === loc
              ? 'bg-primary text-white'
              : 'text-gray-700 dark:text-gray-300 hover:text-primary'
          }`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
} 