import { createStore } from 'vuex';

import { TodoFragmentFragment } from './generated/graphql';

export const store = createStore({
  state: {
    todos: [] as TodoFragmentFragment[]
  },
  mutations: {
    setItems: (state, todos: TodoFragmentFragment[]) => {
      state.todos = todos.sort((a, b) => a.id.localeCompare(b.id));
    },
    toggleCompleted: (state, todo: TodoFragmentFragment) => {
      for (const t of state.todos) {
        if (t.id !== todo.id) {
          continue;
        }

        t.completedAt = todo.completedAt;
      }
    },
    deleteItem: (state, id: string) => {
      state.todos = state.todos.filter((todo) => todo.id != id);
    }
  }
});
