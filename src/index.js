import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App';
import Loading from './common/loading/Loading';

import 'animate.css/animate.min.css';
import 'aos/dist/aos.css';
import 'react-notifications-component/dist/theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './scss/index.scss';

import ReactNotificationsComponent from 'react-notifications-component';

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <ReactNotificationsComponent />
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </Suspense>,
  document.getElementById('root')
);
