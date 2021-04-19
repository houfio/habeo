import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { defineComponent, provide, reactive } from 'vue';

import { useStore } from '../composables/useStore';
import { Container } from '../components/layout/Container';
import { Input } from '../components/forms/Input';
import { TodoItem } from '../components/TodoItem';
import { Icons } from '../components/forms/Icons';
import { icons } from '../constants';

import styles from './App.module.scss';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:8000/graphql'
  }),
  cache: new InMemoryCache()
});

export default defineComponent({
  setup: () => {
    provide(DefaultApolloClient, client);

    const { state, commit } = useStore();
    const todo = reactive({
      text: '',
      icon: Object.keys(icons)[0]
    });

    const onSubmit = (e: Event) => {
      e.preventDefault();

      const trimmed = todo.text.trim();

      if (!trimmed) {
        return;
      }

      commit('addItem', {
        text: trimmed,
        icon: todo.icon,
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
            <div class={styles.icons}>
              <Icons v-model={todo.icon}/>
            </div>
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
