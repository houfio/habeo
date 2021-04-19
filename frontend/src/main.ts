import { createApp } from 'vue';

import { storeKey } from './constants';
import { store } from './store';
import App from './views/App';

import './main.scss';

createApp(App)
  .use(store, storeKey)
  .mount('#app');
