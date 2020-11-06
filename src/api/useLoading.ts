import { reactive, toRefs } from 'vue';

const state = reactive({
    loading: 0
});

export default function useLoading() {
    function increment() {
        state.loading++;
    }

    function decrement() {
        state.loading--;
    }

    return {
        ...toRefs(state),
        increment,
        decrement
    }
}