import { useStore as useVuexStore } from 'vuex';

import { storeKey } from '../constants';

export function useStore() {
  return useVuexStore(storeKey);
}
