import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Aircraft: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-4xl">{t('aircraft')}</h2>
    </div>
  );
};
