import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import Logo from '../../common/logo/Logo';
import mainAppBarLinks from './mainAppBarLinks';
import './MainAppBarLg.scss';
import { Switch } from 'antd';
import mood from '../../assets/imgs/icons/mood.png';
const MainAppBarLg = ({ className, setthemes, themes }) => {
  const { t } = useTranslation();

  const renderNavLinks = () => {
    return (
      <ul>
        {mainAppBarLinks(t).map(({ id, name, link, subitems }) => {
          if (link !== null) {
            return (
              <li key={id}>
                <NavLink  to={link} >
                  {name}
                  <div className="active-img-wrap"></div>
                </NavLink>
              </li>
            );
          } else {
            return (
              <li key={id}>
                <div className="dropdown">
                  <span>{name}</span>
                  <div className="dropdown-content">
                    <ul>
                      {subitems.map((item) => {
                        return (
                          <li key={item.id}>
                            <NavLink  to={item.link} >
                              {item.name}
                              <div className="active-img-wrap"></div>
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            );
          }
        })}
      </ul>
    );
  };
  const changeMood = (e) => {
    // console.log('====================================');
    // console.log(e);
    // console.log('====================================');
    setthemes((perv) => !perv);
  };
  return (
    <>
      <div style={{ backgroundColor: '#232326', padding: '10px 0px', textAlign: 'end' }}>
        <div className="custom-container">
          <Switch
            checkedChildren={<img src={mood} />}
            unCheckedChildren={<img src={mood} />}
            defaultChecked={themes}
            onChange={(e) => changeMood(e)}
          />
        </div>
      </div>

      <div className={className}>
        <div className="custom-container">
          <div className="mood"></div>
          <div className="nav-content-wrapper">
            <Logo className="main-app-bar-logo" />
            <div className="nav-lang-wrapper">
              {renderNavLinks()}
              <a className="sign-up-btn">{t('main_app_bar_links.sign_up')}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAppBarLg;
