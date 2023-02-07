import React from 'react';
import { useTranslation } from 'react-i18next';

import arrow from '../../../../assets/imgs/explore-section/right-arrow.png';
import EgyptianFoodBank from '../../../../assets/imgs/explore-section/Egyptian-Food-Bank.png';
import EgyptianFoodBankLogo from '../../../../assets/imgs/explore-section/Egyptian-Food-Bank-logo.png';

import ahlMasr from '../../../../assets/imgs/explore-section/ahl-masr.png';
import ahlMasrLogo from '../../../../assets/imgs/explore-section/ahl-masr-logo.png';

import informazione_foto from '../../../../assets/imgs/explore-section/informazione_foto.png';
import informazione_foto_logo from '../../../../assets/imgs/explore-section/informazione_foto_logo.png';

import person1 from '../../../../assets/imgs/explore-section/person1.png';

import person2 from '../../../../assets/imgs/explore-section/person2.png';
import person3 from '../../../../assets/imgs/explore-section/person3.png';

import './ExploreSection.scss';
import ProgressBar from '@ramonak/react-progress-bar';
import { CircularProgressbar } from 'react-circular-progressbar';

const ExploreSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={`explore-section ${i18n.dir()}`}>
      <div className="custom-container">
        <div className="explore-title">
          <h1>{t('explore_section.title')}</h1>
          <div className="arrow-img">
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="explore-items">
          <div className="explore-card">
            <div className="header" style={{ backgroundImage: `url(${EgyptianFoodBank})` }}>
              <div>
                <img src={EgyptianFoodBankLogo} alt="EgyptianFoodBankLogo" />
              </div>
              <div className="cyrcle-bar">
                <CircularProgressbar value={50} text={`2`} />
              </div>
            </div>
            <div className="cart-data">
              <h1>Egyptian Food Bank</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's{' '}
              </p>
              <div className="tags">
                <div>LABEL 1</div>
                <div>LABEL 2</div>
                <div>LABEL 3</div>
              </div>
              <div className="complate-data">
                <div className="number">60%</div>
                <div className="progress">
                  <ProgressBar completed={60} />
                </div>
                <div className="compare-div">
                  <div className="number">600,000 EGP</div>
                  <div className="total">1,000,000,000 EGP</div>
                </div>
              </div>
              <div className="persons">
                <div>
                  <img src={person1} />
                  <img src={person2} />
                  <img src={person3} />
                </div>
                <div className="users">
                  Backed by <strong>Ahmed, Nada</strong> and <strong> 3 others</strong>
                </div>
              </div>
              <div className="card-footer">
                <div className="">
                  <p>Label</p>
                  <h3>12%</h3>
                </div>
                <div className="">
                  <p>Label</p>
                  <h3>6 months</h3>
                </div>
                <div className="">
                  <a href="http://" className="donate-btn">
                    Donate
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-card">
            <div className="header" style={{ backgroundImage: `url(${ahlMasr})` }}>
              <div>
                <img src={ahlMasrLogo} alt="EgyptianFoodBankLogo" />
              </div>
              <div className="cyrcle-bar">
                <CircularProgressbar value={25} text={`1`} />
              </div>
            </div>
            <div className="cart-data">
              <h1>Egyptian Food Bank</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's{' '}
              </p>
              <div className="tags">
                <div>LABEL 1</div>
                <div>LABEL 2</div>
                <div>LABEL 3</div>
              </div>
              <div className="complate-data">
                <div className="number">60%</div>
                <div className="progress">
                  <ProgressBar completed={60} />
                </div>
                <div className="compare-div">
                  <div className="number">600,000 EGP</div>
                  <div className="total">1,000,000,000 EGP</div>
                </div>
              </div>
              <div className="persons">
                <div>
                  <img src={person1} />
                  <img src={person2} />
                  <img src={person3} />
                </div>
                <div className="users">
                  Backed by <strong>Ahmed, Nada</strong> and <strong> 3 others</strong>
                </div>
              </div>
              <div className="card-footer">
                <div className="">
                  <p>Label</p>
                  <h3>12%</h3>
                </div>
                <div className="">
                  <p>Label</p>
                  <h3>6 months</h3>
                </div>
                <div className="">
                  <a href="http://" className="donate-btn">
                    Donate
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-card">
            <div className="header" style={{ backgroundImage: `url(${informazione_foto})` }}>
              <div>
                <img src={informazione_foto_logo} alt="EgyptianFoodBankLogo" />
              </div>
              <div className="cyrcle-bar">
                <CircularProgressbar value={25} text={`1`} />
              </div>
            </div>
            <div className="cart-data">
              <h1>Egyptian Food Bank</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's{' '}
              </p>
              <div className="tags">
                <div>LABEL 1</div>
                <div>LABEL 2</div>
                <div>LABEL 3</div>
              </div>
              <div className="complate-data">
                <div className="number">60%</div>
                <div className="progress">
                  <ProgressBar completed={60} />
                </div>
                <div className="compare-div">
                  <div className="number">600,000 EGP</div>
                  <div className="total">1,000,000,000 EGP</div>
                </div>
              </div>

              <div className="persons">
                <div>
                  <img src={person1} />
                  <img src={person2} />
                  <img src={person3} />
                </div>
                <div className="users">
                  Backed by <strong>Ahmed, Nada</strong> and <strong> 3 others</strong>
                </div>
              </div>
              <div className="card-footer">
                <div className="">
                  <p>Label</p>
                  <h3>12%</h3>
                </div>
                <div className="">
                  <p>Label</p>
                  <h3>6 months</h3>
                </div>
                <div className="">
                  <a href="http://" className="donate-btn">
                    Donate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
