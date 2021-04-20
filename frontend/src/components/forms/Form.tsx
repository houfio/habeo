import { defineComponent, PropType, ref } from 'vue';

export const Form = defineComponent({
  props: {
    onSubmit: {
      type: Function as PropType<() => Promise<unknown>>,
      required: true
    }
  },
  setup: (props, { slots, attrs }) => {
    const loading = ref(false);

    return () => (
      <form
        onSubmit={(e) => {
          e.preventDefault();

          loading.value = true;

          props.onSubmit()
            .finally(() => loading.value = false);
        }}
        {...attrs}
      >
        {slots.default?.({
          loading: loading.value
        })}
      </form>
    );
  }
});
