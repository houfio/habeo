import { defineComponent } from 'vue';

import { useStore } from '../composables/useStore';

export default defineComponent({
  setup() {
    const { state, commit } = useStore();

    return () => (
      <div>
        <button onClick={() => commit('addItem', { text: 'Todo', done: false })}>
          Add
        </button>
        {state.todos.map((todo, i) => (
          <div key={i}>
            {todo.text}
          </div>
        ))}
      </div>
    );
  }
});
