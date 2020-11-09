<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import BusyIndicator from "@/api/BusyIndicator.vue";

export default defineComponent({
  components: {
    TheHeader,
    BusyIndicator
  },
});
</script>
<template>
  <TheHeader />
  <div class="site-body">
    <router-view />
  </div>
  <BusyIndicator class="spinner-wrapper" />
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
