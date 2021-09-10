import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-4xl">{t('home')}</h2>
    </div>
  );
};
