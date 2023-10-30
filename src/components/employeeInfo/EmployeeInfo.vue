<template>
  <div class="employee-info">
    <div v-if="employee" class="employee-info__container-profile">
      <div class="employee-info__container-image">
        <img src="@/assets/employee/avatar.png" alt="avatar" class="employee-info__image">
      </div>
      <div class="employee-info__container-resume">
        <p class="employee-info__name">
          {{ employee.name }}
        </p>
        <div class="employee-info__contacts">
          <p class="employee-info__contact employee-info-contact">
            <span class="employee-info-contact__title">email:</span>&nbsp;
            <span class="employee-info-contact__text">{{ employee.email }}</span>
          </p>
          <p class="employee-info__contact employee-info-contact">
            <span class="employee-info-contact__title">phone:</span>&nbsp;
            <span class="employee-info-contact__text">{{ employee.phone }}</span>
          </p>
        </div>
        <div class="employee-info-description">
          <p class="employee-info-description__title">
            О себе:
          </p>
          <p class="employee-info-description__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
      </div>
    </div>
    <p v-else class="employee-info__change-profile">
      Выберите сотрудника, чтобы посмотреть его профиль
    </p>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'EmployeeInfo',
  setup () {
    const store = useStore()
    const employee = computed(() => store.getters.employee)

    return {
      employee
    }
  }
})
</script>

<style scoped lang="scss">
@import "@/components/employeeInfo/styles/employee-info";
</style>
