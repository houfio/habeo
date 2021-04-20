import { defineComponent } from 'vue';

import styles from './Input.module.scss';

export const Input = defineComponent({
  props: {
    modelValue: String,
    disabled: Boolean
  },
  setup: (props, { emit }) => () => (
    <input
      class={styles.input}
      value={props.modelValue}
      disabled={props.disabled}
      onInput={(e) => emit('update:modelValue', (e.target as HTMLInputElement).value)}
    />
  )
});
