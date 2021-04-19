import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { defineComponent, PropType } from 'vue';

import { useStore } from '../composables/useStore';
import { Todo } from '../types';
import { icons } from '../constants';

import styles from './TodoItem.module.scss';

export const TodoItem = defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true
    }
  },
  setup(props) {
    const { todo } = props;
    const { commit } = useStore();

    return () => (
      <button class={styles.item} data-done={todo.done} onClick={() => commit('toggleDone', todo)}>
        <FontAwesomeIcon class={styles.icon} icon={icons[todo.icon]} size="2x" fixedWidth={true}/>
        {todo.text}
      </button>
    );
  }
});
