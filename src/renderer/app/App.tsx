const { ipcRenderer } = window.require('electron');
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Device } from 'usb-detection';
import { Provider } from 'react-redux';
import { store } from './store';
import { Sidebar } from './organisms';
import { Home, Equipment, Aircraft, Import, Settings } from './templates';

export const App: FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    ipcRenderer.invoke('getLanguage').then((value) => {
      i18n.changeLanguage(value);
    });
    ipcRenderer.on('deviceConnected', (_, device: Device) => {
      console.log({ device });
    });
  }, []);

  const language = ipcRenderer.invoke('getLanguage');
  return (
    <HashRouter>
      <div className="w-screen h-screen bg-gray-200 flex">
        <Provider store={store}>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/import" component={Import} />
            <Route path="/equipment" component={Equipment} />
            <Route path="/aircraft" component={Aircraft} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </Provider>
      </div>
    </HashRouter>
  );
};
