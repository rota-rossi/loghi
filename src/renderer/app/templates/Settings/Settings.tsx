import { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
const { ipcRenderer } = window.require('electron');

export const Settings: FC = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (ev: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(ev.target.value);
    ipcRenderer.send('setLanguage', ev.target.value);
  };

  return (
    <div>
      <h2 className="text-4xl">{t('settings')}</h2>
      <div>
        <label htmlFor="language">{t('change_language')}</label>
        <select
          name="language"
          onChange={handleChangeLanguage}
          value={i18n.language}
        >
          <option value="en">{t('english')}</option>
          <option value="pt-BR">{t('portuguese')}</option>
        </select>
      </div>
    </div>
  );
};
