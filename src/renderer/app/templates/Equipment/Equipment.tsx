import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Equipment: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-4xl">{t('equipment')}</h2>
    </div>
  );
};
