<template>
<header class="app-header">
  <router-link to="/" class="app-header__logo">
    LOGO
  </router-link>

  <router-link to="/" class="app-header__user">
    Пользователь
  </router-link>
</header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppHeader'
})
</script>

<style scoped lang="scss">
@import "@/components/appHeader/styles/app-header";
</style>
