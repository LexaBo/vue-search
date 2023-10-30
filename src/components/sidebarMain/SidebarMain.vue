<template>
  <div class="sidebar-main">
    <h4 class="sidebar-main__title">
      Поиск сотрудников
    </h4>
    <form @submit.prevent class="sidebar-main__form">
      <input @input="onInputEmployeesDebounce();onInputEmployees()"
             v-model="requiredEmployees"
             placeholder="Введите id или имя"
             class="sidebar-main__input"
             type="text">
    </form>
    <h4 class="sidebar-main__title">
      Результаты
    </h4>
    <p v-if="showNoteResult" class="sidebar-main-result-note">
      {{ noteResult }}
    </p>
    <div
      v-else
      @scroll="onScrollResults"
      class="sidebar-main__results">
      <div v-for="employee in partEmployees"
           :key="employee.id"
           @click="onClickResult(employee.id)"
           class="sidebar-main__result sidebar-main-result"
           :class="{'sidebar-main__result sidebar-main-result--active': currentSelectedValue === employee.id}">
        <div class="sidebar-main-result__image-container">
          <img src="@/assets/employee/avatar.png" alt="avatar" class="sidebar-main-result__image">
        </div>
        <div class="sidebar-main-result__description">
          <p class="sidebar-main-result__name">
            {{ employee.username }}
          </p>
          <p class="sidebar-main-result__email">
            {{ employee.email }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref, unref } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SidebarMain',
  setup () {
    const requiredEmployees = ref(null)
    const store = useStore()
    const currentSelectedValue = computed(() => store.getters.currentIdEmployee)
    const employees = computed(() => store.getters.employees)
    const noteResult = computed(() => unref(requiredEmployees) ? 'ничего не найдено' : 'начните поиск')
    const showNoteResult = computed(() => !unref(requiredEmployees) || !unref(employees).length)
    const pageEmployees = ref('1')
    const countShow = 6
    const partEmployees = computed(() => unref(employees).slice(0, countShow * unref(pageEmployees)))

    const onInputEmployees = () => {
      if (!unref(requiredEmployees)) {
        pageEmployees.value = 1
        store.dispatch('updateCurrentIdEmployee', null)
      }
    }

    const onInputEmployeesDebounce = useDebounceFn(() => {
      store.dispatch('getEmployees', unref(requiredEmployees))
    }, 500)

    const onClickResult = (id) => {
      store.dispatch('updateCurrentIdEmployee', id)
    }

    const onScrollResults = (event) => {
      const currentTarget = event.currentTarget

      if (currentTarget.scrollTop + currentTarget.clientHeight >= currentTarget.scrollHeight) {
        pageEmployees.value += 1
      }
    }

    return {
      onClickResult,
      currentSelectedValue,
      employees,
      partEmployees,
      requiredEmployees,
      onInputEmployees,
      onInputEmployeesDebounce,
      noteResult,
      showNoteResult,
      onScrollResults
    }
  }
})
</script>

<style scoped lang="scss">
@import "@/components/sidebarMain/styles/sidebar-main";
</style>
