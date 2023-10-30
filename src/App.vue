<template>
  <div class="app">
    <AppHeader />
    <router-view/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AppHeader from '@/components/appHeader/AppHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader
  }
})

</script>

<style lang="scss">
@import "@/styles/app";
</style>
