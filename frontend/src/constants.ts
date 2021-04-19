import { InjectionKey } from 'vue';
import { store } from './store';

export const storeKey: InjectionKey<typeof store> = Symbol();
