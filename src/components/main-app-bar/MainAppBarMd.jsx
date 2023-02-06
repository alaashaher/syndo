import { Drawer, IconButton } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import LanguageButton from '../../common/language-button/LanguageButton';
import Logo from '../../common/logo/Logo';
import mainAppBarLinks from './mainAppBarLinks';
// import MenuIcon from '@material-ui/icons/Menu';
import './MainAppBarMd.scss';

const MainAppBarMd = ({ className }) => {
  const { t } = useTranslation();
  const [drawerOpened, setDrawerOpened] = useState(false);
  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpened((prevState) => !prevState);
  };

  const renderNavLinks = () => {
    return (
      <ul>
        {mainAppBarLinks(t).map(
          ({ id, name, link, subitems }) => {
            if (link !== null) {
              return (
                <li key={id}>
                  <NavLink activeClassName="active-link" to={link} exact>
                    {name}
                    <div className="active-img-wrap"></div>
                  </NavLink>
                </li>
              );
            } else {
              return (
                <li key={id}>
                  {subitems.map(({ id, name, link }) => {
                    return (
                      <li key={id}>
                        <NavLink activeClassName="active-link" to={link} exact>
                          {name}
                          <div className="active-img-wrap"></div>
                        </NavLink>
                      </li>
                    );
                  })}
                </li>
              );
            }
          }

          // <li key={id} onClick={toggleDrawer()}>
          //   <NavLink className="nav-link" activeClassName="active-link" to={link} exact>
          //     {name}
          //     <div className="active-img-wrap"></div>
          //   </NavLink>
          // </li>
        )}
      </ul>
    );
  };

  return (
    <div className={className}>
      <div className="custom-container">
        <div className="nav-content-wrapper">
          <div className="nav-lang-wrapper">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer()}
              edge="start"
              // className={clsx(classes.menuButton, open && classes.hide)}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <LanguageButton />
          </div>

          <Logo className="main-app-bar-logo" />
        </div>
      </div>
      <Drawer
        className="header-md-drawer"
        // anchor="right"
        open={drawerOpened}
        onClose={toggleDrawer()}>
        <div className="logo-links">
          <Logo className="main-app-bar-logo" />
          {renderNavLinks()}
        </div>
      </Drawer>
    </div>
  );
};

export default MainAppBarMd;
