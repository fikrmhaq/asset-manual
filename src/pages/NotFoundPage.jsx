import { Link } from 'react-router-dom';

import { useTranslate } from '@/i18n/language';

export function NotFoundPage() {
  const t = useTranslate();

  return (
    <div className="mx-auto max-w-lg py-16 text-center">
      <h1 className="text-2xl font-semibold text-foreground">{t('notFound.title')}</h1>
      <p className="mt-2 text-muted-foreground">{t('notFound.body')}</p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
      >
        {t('notFound.action')}
      </Link>
    </div>
  );
}
