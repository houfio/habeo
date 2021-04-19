import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { defineComponent } from 'vue';

import { icons } from '../../constants';

import styles from './Icons.module.scss';

export const Icons = defineComponent({
  props: {
    modelValue: String
  },
  setup: (props, { emit }) => () => (
    <div class={styles.wrapper}>
      {Object.entries(icons).map(([value, icon]) => (
        <div key={value} class={styles.icon}>
          <input
            id={value}
            name="icon"
            value={value}
            type="radio"
            checked={value === props.modelValue}
            onInput={() => emit('update:modelValue', value)}
          />
          <label for={value}>
            <FontAwesomeIcon icon={icon} fixedWidth={true}/>
          </label>
        </div>
      ))}
    </div>
  )
});
