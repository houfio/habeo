import { defineComponent } from 'vue';

import { useStore } from '../composables/useStore';
import { Container } from '../components/Container';

import styles from './App.module.scss';

export default defineComponent({
  setup() {
    const { state, commit } = useStore();

    return () => (
      <Container>
        <div>
          <button onClick={() => commit('addItem', { text: 'Todo', done: false })}>
            Add
          </button>
        </div>
        {state.todos.map((todo, i) => (
          <div key={i}>
            <button class={styles.todo} data-done={todo.done} onClick={() => commit('toggleDone', todo)}>
              {todo.text}
            </button>
          </div>
        ))}
      </Container>
    );
  }
});
