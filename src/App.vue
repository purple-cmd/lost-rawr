<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "@/components/TheHeader.vue";

export default defineComponent({
  components: {
    TheHeader,
  },
});
</script>
<template>
  <TheHeader />
  <div class="site-body">
    <router-view />
  </div>
</template>
<style scoped>
.site-body {
  width: 800px;
  margin: 20px auto;
}
</style>
