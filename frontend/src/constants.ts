import { faCheck, faExclamation, faFolder, faQuestion, faUser } from '@fortawesome/free-solid-svg-icons';
import { InjectionKey } from 'vue';

import { store } from './store';

export const storeKey: InjectionKey<typeof store> = Symbol();

export const icons = {
  check: faCheck,
  folder: faFolder,
  user: faUser,
  question: faQuestion,
  exclamation: faExclamation
};
