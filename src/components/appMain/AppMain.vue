<template>
<main class="app-main">
  <div class="app-main__column">
    <SidebarMain/>
  </div>
  <div class="app-main__column">
    <EmployeeInfo/>
  </div>
  <LoaderMain v-if="isLoading"/>
</main>
</template>

<script>
import { computed, defineComponent } from 'vue'
import SidebarMain from '@/components/sidebarMain/SidebarMain.vue'
import EmployeeInfo from '@/components/employeeInfo/EmployeeInfo.vue'
import LoaderMain from '@/components/loaderMain/LoaderMain.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'AppHeader',
  components: {
    SidebarMain,
    EmployeeInfo,
    LoaderMain
  },
  setup () {
    const store = useStore()
    const isLoading = computed(() => store.getters.isLoad)

    return {
      isLoading
    }
  }
})
</script>

<style scoped lang="scss">
@import "@/components/appMain/styles/app-main";
</style>
