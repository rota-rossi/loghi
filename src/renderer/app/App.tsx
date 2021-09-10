const { ipcRenderer } = window.require('electron');
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';
import { Sidebar } from './organisms';
import { Home, Equipment, Aircraft, Import, Settings } from './templates';

export const App: FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    ipcRenderer.invoke('getLanguage').then((value) => {
      i18n.changeLanguage(value);
    });
  }, []);

  const language = ipcRenderer.invoke('getLanguage');
  return (
    <div className="w-screen h-screen bg-gray-200 flex">
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/import" component={Import} />
        <Route path="/equipment" component={Equipment} />
        <Route path="/aircraft" component={Aircraft} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </div>
  );
};
