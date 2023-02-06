import routerLinks from '../app/routerLinks';

const mainAppBarLinks = (t) => [
  {
    id: 1,
    name: t('main_app_bar_links.home'),
    link: routerLinks.homePage
  },
  {
    id: 2,
    name: t('main_app_bar_links.about'),
    link: routerLinks.homePage
  },
  // {
  //   id: 3,
  //   name: t('services_section.main_title'),
  //   link: null,
  //   subitems: [
  //     {
  //       id: 5,
  //       name: t('services_section.webServicePage'),
  //       link: routerLinks.webServicePage
  //     }, {
  //       id: 6,
  //       name: t('services_section.mobileServicePage'),
  //       link: routerLinks.mobileServicePage
  //     }
  //   ]
  // },
  {
    id: 4,
    name: t('main_app_bar_links.contact'),
    link: routerLinks.homePage
  }
];

export default mainAppBarLinks;
