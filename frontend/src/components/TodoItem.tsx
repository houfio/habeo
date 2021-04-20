import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { defineComponent, PropType } from 'vue';
import { useMutation } from 'villus';

import { useStore } from '../composables/useStore';
import { icons } from '../constants';
import { TodoFragmentFragment, ToggleTodoDocument } from '../generated/graphql';

import styles from './TodoItem.module.scss';

export const TodoItem = defineComponent({
  props: {
    todo: {
      type: Object as PropType<TodoFragmentFragment>,
      required: true
    }
  },
  setup: (props) => {
    const { todo } = props;
    const { commit } = useStore();
    const { execute } = useMutation(ToggleTodoDocument);

    const onClick = async () => {
      const { data } = await execute({
        id: todo.id
      });

      if (data) {
        commit('toggleCompleted', data.toggleCompleted);
      }
    };

    return () => (
      <button class={styles.item} data-done={Boolean(todo.completedAt)} onClick={onClick}>
        <FontAwesomeIcon class={styles.icon} icon={(icons as any)[todo.icon]} size="2x" fixedWidth={true}/>
        {todo.text}
      </button>
    );
  }
});
