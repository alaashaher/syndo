import routerLinks from '../app/routerLinks';

const mainAppBarLinks = (t) => [{
    id: 1,
    name: t('main_app_bar_links.home'),
    link: routerLinks.homePage
  },
  {
    id: 2,
    name: t('main_app_bar_links.Campaigns'),
    link: routerLinks.homePage
  },
  {
    id: 3,
    name: t('main_app_bar_links.Products'),
    link: routerLinks.homePage,

  },
  {
    id: 4,
    name: t('main_app_bar_links.About'),
    link: routerLinks.homePage
  },
  {
    id: 4,
    name: t('main_app_bar_links.Login'),
    link: routerLinks.homePage
  }
];

export default mainAppBarLinks;