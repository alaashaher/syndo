import React, { useEffect } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import lngs from '../../languages';

import './LanguageButton.scss';

const LanguageButton = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const renderLanguage = () => {
    const code = i18n.language;
    const filteredLngs = lngs.filter((lng) => lng.code !== code);
    return filteredLngs.map(
      ({ country_code, code, name }, index) => (
        <span key={index} className="lng-span-btn" onClick={() => i18next.changeLanguage(code)}>
          {name}
        </span>
      )
    );
  };

  return <div className="main-lang-btn">{renderLanguage()}</div>;
};

export default LanguageButton;
