<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import APISpinner from "@/api/APISpinner.vue";

export default defineComponent({
  components: {
    TheHeader,
    APISpinner
  },
});
</script>
<template>
  <TheHeader />
  <div class="site-body">
    <router-view />
  </div>
  <APISpinner class="spinner-wrapper" />
</template>
<style scoped>
.site-body {
  width: 800px;
  margin: 20px auto;
}

.spinner-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
