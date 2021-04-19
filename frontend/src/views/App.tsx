import { defineComponent, reactive, watch } from 'vue';
import { useMutation, useQuery } from 'villus';

import { useStore } from '../composables/useStore';
import { Container } from '../components/layout/Container';
import { Input } from '../components/forms/Input';
import { TodoItem } from '../components/TodoItem';
import { Icons } from '../components/forms/Icons';
import { icons } from '../constants';
import { CreateTodoDocument, GetTodosDocument } from '../generated/graphql';

import styles from './App.module.scss';
import { Form } from '../components/forms/Form';

export const App = defineComponent({
  setup: () => {
    const { state, commit } = useStore();
    const { data, isFetching } = useQuery({
      query: GetTodosDocument
    });
    const { execute } = useMutation(CreateTodoDocument);
    const todo = reactive({
      text: '',
      icon: Object.keys(icons)[0]
    });

    watch(data, () => {
      data.value?.todos.forEach((todo) => {
        commit('putItem', todo);
      });
    });

    const onSubmit = async () => {
      const trimmed = todo.text.trim();

      if (!trimmed) {
        return;
      }

      const { data } = await execute({
        text: trimmed,
        icon: todo.icon
      });

      if (data) {
        commit('putItem', data.createTodo);
        todo.text = '';
      }
    };

    return () => (
      <Container>
        <div class={styles.header}>
          <h1 class={styles.title}>
            To-do List
          </h1>
          <Form class={styles.form} onSubmit={onSubmit}>
            {(props: { loading: boolean }) => (
              <>
                <Input v-model={todo.text} disabled={props.loading || isFetching.value}/>
                <div class={styles.icons}>
                  <Icons v-model={todo.icon} disabled={props.loading || isFetching.value}/>
                </div>
              </>
            )}
          </Form>
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
