import { createApp } from 'vue';
import { createClient, fetch } from 'villus';

import { storeKey } from './constants';
import { store } from './store';
import { App } from './views/App';

import './main.scss';

createApp(App)
  .use(store, storeKey)
  .use(createClient({
    url: import.meta.env.VITE_API_URL,
    use: [fetch()]
  }))
  .mount('#app');
