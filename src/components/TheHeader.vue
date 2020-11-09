<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
<template>
  <nav class="the-header">
    <li>
      <router-link to="/">
        Home
      </router-link>
    </li>
    <li>
      <router-link to="/login">
        Login
      </router-link>
    </li>
  </nav>
</template>
<style scoped>
.the-header {
  width: 100%;
  background: #d7d0d0;
  display: flex;
  list-style-type: none;
}

li {
  padding: 10px;
}

</style>
