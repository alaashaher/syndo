import axios from 'axios';
import Cookies from 'js-cookie';
import { store } from 'react-notifications-component';
// import {Store} from 'react-notifications-component'
import urls from '../urls';

// axios.defaults.adapter = require('axios/lib/adapters/http');
axios.defaults.headers.common['Content-Type'] = 'application/json';
// import { urls } from '../urls.js';

const url = urls.baseUrl;

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    Cookies.set('token', token);
    return;
  }

  const userCookie = Cookies.get('currentUser');
  if (userCookie) {
    // const user = JSON.parse(Cookies.get('currentUser'));
    let token2 = Cookies.get('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token2}`;
  }
  return;
  // }
}
// setAuthorizationToken(null);

function checkResponse(response) {
  if (response.data.StatusCode !== 200) {
    const error = new Error(response.data.Messages);
    throw error;
  } else {
    // const newResponse = {
    //   ...response.data
    // };
    return response.data;
  }
}

export function displayError(error) {
  if (error?.response?.status === 401) {
    sessionStorage.removeItem('currentUser');
    Cookies.remove('currentUser');
    sessionStorage.removeItem('token');
    Cookies.remove('token');
    localStorage.clear();
    // window.location.reload();
  } else {
    store.addNotification({
      title: 'حدث خطأ ',
      message: error?.message || error?.response?.data?.message || 'حاول فى وقت لاحق',
      type: 'danger',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 2000,
        showIcon: true,
        onScreen: true
      }
    });
  }
}

export async function postToApi(path, body, config) {
  setAuthorizationToken();
  const response = await axios.post(path, body, config);
  return checkResponse(response);
}

export async function deleteToApi(path, config) {
  setAuthorizationToken();
  const response = await axios.post(path, config);
  return checkResponse(response);
}
export async function uploadToApi(path, formData, config) {
  setAuthorizationToken();
  const response = await axios.post(path, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return checkResponse(response);
}
export async function getFromApi(path, config) {
  setAuthorizationToken();
  const response = await axios
    .create({
      baseURL: url
    })
    .get(path, config);

  return checkResponse(response);
}

export async function putToApi(path, body, config) {
  setAuthorizationToken();
  const response = await axios
    .create({
      baseURL: url
    })
    .put(path, body, config);
  return checkResponse(response);
}

export async function deleteFromAgel(path, config) {
  setAuthorizationToken();
  const response = await axios
    .create({
      baseURL: url
    })
    .delete(path, config);

  return checkResponse(response);
}
// export async function changeLanguage(lang: string) {
//   const langCookie = Cookies.get("i18next");
//   axios.defaults.headers.common["accept-language"] = lang || langCookie;
//   if (lang) {
//     await putToApi("staff/updateProfile", { lang: lang });
//   }
// }

export default axios.create({ baseURL: url });
