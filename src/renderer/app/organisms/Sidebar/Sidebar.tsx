import { History } from 'history';
import { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Container,
  Belly,
  Aircraft,
  Altimeter,
  Settings,
} from 'app/atoms/icons';
import { MenuButton } from 'app/molecules';

interface IProps {
  pathname: string;
  history: History<unknown>;
}

export const SidebarUI: FC<IProps> = ({ history, pathname }) => {
  const handleNavigation = (route: string) => () => {
    history.push(route);
  };

  return (
    <nav className="w-16 bg-white h-screen">
      <MenuButton
        Icon={Belly}
        selected={pathname === '/'}
        onClick={handleNavigation('/')}
        label="Home"
      />
      <MenuButton
        Icon={Altimeter}
        selected={pathname === '/import'}
        onClick={handleNavigation('/import')}
        label="Import"
      />
      <MenuButton
        Icon={Container}
        selected={pathname === '/equipment'}
        onClick={handleNavigation('/equipment')}
        label="Equipment"
      />
      <MenuButton
        Icon={Aircraft}
        selected={pathname === '/aircraft'}
        onClick={handleNavigation('/aircraft')}
        // disabled
        label="Aircraft"
      />
      <MenuButton
        Icon={Settings}
        selected={pathname === '/settings'}
        onClick={handleNavigation('/settings')}
        label="Settings"
      />
    </nav>
  );
};

export const Sidebar: FC = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  return <SidebarUI history={history} pathname={pathname} />;
};
