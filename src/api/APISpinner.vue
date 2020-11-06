<script lang="ts">
import { defineComponent } from 'vue';
import useLoading from './useLoading';

export default defineComponent({
    setup() {
        const { loading } = useLoading();
        return { loading }
    }
})
</script>
<template>
  <div v-if="loading">
    loading... 
  </div>
</template>
<style scoped>

</style>