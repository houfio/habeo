import { createStore } from 'vuex';

import { Todo } from './types';

export const store = createStore({
  state: {
    todos: [] as Todo[]
  },
  mutations: {
    addItem(state, todo: Todo) {
      state.todos.push(todo);
    },
    toggleDone(state, item: Todo) {
      const index = state.todos.indexOf(item);

      if (index === -1) {
        return;
      }

      state.todos[index].done = !state.todos[index].done;
    }
  }
});
