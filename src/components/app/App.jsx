/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense } from 'react';
import MomentUtils from '@date-io/moment';
import { create } from 'jss';
import { ThemeProvider, StylesProvider, jssPreset } from '@material-ui/core';
import rtl from 'jss-rtl';
import theme from '../../theme';
import { useTranslation } from 'react-i18next';
import Loading from '../../common/loading/Loading';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import axios from 'axios';

import Routess from './Routess';
import '../../i18n';
import AppLayout from './Layout';

import urls from '../../urls';


axios.defaults.baseURL = urls.baseUrl;

function App() {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  const { i18n } = useTranslation();
  

  return (
    <>
      <div className={`app app-${i18n.dir()}`}>
        <ThemeProvider theme={theme(i18n.dir())}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <StylesProvider jss={jss}>
              <Suspense fallback={<Loading />}>
                <AppLayout>
                  <Routess />
                </AppLayout>
              </Suspense>
            </StylesProvider>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
