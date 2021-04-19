import { createStore } from 'vuex';

import { TodoFragmentFragment } from './generated/graphql';

export const store = createStore({
  state: {
    todos: [] as TodoFragmentFragment[]
  },
  mutations: {
    putItem(state, todo: TodoFragmentFragment) {
      state.todos = [
        ...state.todos.filter(({ id }) => id !== todo.id),
        todo
      ].sort((a, b) => a.id.localeCompare(b.id));
    }
  }
});
