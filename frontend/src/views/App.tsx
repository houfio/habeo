import { defineComponent, reactive } from 'vue';

import { useStore } from '../composables/useStore';
import { Container } from '../components/layout/Container';
import { Input } from '../components/forms/Input';
import { TodoItem } from '../components/TodoItem';

import styles from './App.module.scss';

export default defineComponent({
  setup: () => {
    const { state, commit } = useStore();
    const todo = reactive({
      text: ''
    });

    const onSubmit = (e: Event) => {
      e.preventDefault();

      const trimmed = todo.text.trim();

      if (!trimmed) {
        return;
      }

      commit('addItem', {
        text: trimmed,
        done: false
      });
      todo.text = '';
    };

    return () => (
      <Container>
        <div class={styles.header}>
          <h1 class={styles.title}>
            To-do List
          </h1>
          <form class={styles.form} onSubmit={onSubmit}>
            <Input v-model={todo.text}/>
          </form>
        </div>
        <div class={styles.items}>
          {state.todos.map((todo, i) => (
            <TodoItem key={i} todo={todo}/>
          ))}
        </div>
      </Container>
    );
  }
});
