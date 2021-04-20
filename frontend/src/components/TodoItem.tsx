import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { defineComponent, PropType } from 'vue';
import { useMutation } from 'villus';

import { useStore } from '../composables/useStore';
import { icons } from '../constants';
import { DeleteTodoDocument, TodoFragmentFragment, ToggleTodoDocument } from '../generated/graphql';

import styles from './TodoItem.module.scss';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
    const { execute: executeDelete } = useMutation(DeleteTodoDocument);

    const onClick = async () => {
      const { data } = await execute({
        id: todo.id
      });

      if (data) {
        commit('toggleCompleted', data.toggleCompleted);
      }
    };

    const onClickDelete = async () => {
      const { data } = await executeDelete({
        id: todo.id
      });

      if (data?.deleteTodo?.id) {
        commit('deleteItem', data.deleteTodo.id);
      }
    }

    return () => (
      <div class={styles.wrapper}>
        <button class={styles.item} data-done={Boolean(todo.completedAt)} onClick={onClick}>
          <FontAwesomeIcon class={styles.icon} icon={(icons as any)[todo.icon]} size="2x" fixedWidth={true}/>
          {todo.text}
        </button>
        <button onClick={onClickDelete}>
          <FontAwesomeIcon icon={faTrash}/>
        </button>
      </div>

    );
  }
});
