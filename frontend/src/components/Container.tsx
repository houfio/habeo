import { defineComponent } from 'vue';

import styles from './Container.module.scss';

export const Container = defineComponent({
  setup(props, { slots }) {
    return () => (
      <div class={styles.container}>
        {slots.default?.()}
      </div>
    );
  }
});
