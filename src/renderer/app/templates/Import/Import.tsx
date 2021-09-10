import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Import: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-4xl">{t('import')}</h2>
    </div>
  );
};
