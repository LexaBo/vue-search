import { createStore } from 'vuex'

export default createStore({
  state: {
    employees: [],
    isLoading: false,
    currentIdEmployee: null
  },
  getters: {
    employees (state) {
      return state.employees
    },
    employee (state) {
      return state.employees.find(element => element.id === state.currentIdEmployee)
    },
    isLoad (state) {
      return state.isLoading
    },
    currentIdEmployee (state) {
      return state.currentIdEmployee
    }
  },
  mutations: {
    updateEmployees (state, employees) {
      state.employees = employees
    },

    setLoad (state, isLoading) {
      state.isLoading = isLoading
    },

    setCurrentIdEmployee (state, id) {
      state.currentIdEmployee = id
    }
  },
  actions: {
    getEmployees (ctx, payload) {
      const arrRequiredEmployees = payload.split(',').map((item) => item.trim()).filter((item) => item !== '')
      const arrIdRequiredEmployees = []
      const arrNameRequiredEmployees = []
      const allFetches = []
      let paramIdRequiredEmployees = ''
      let paramNameRequiredEmployees = ''
      const fetchEmployees = (params) => {
        ctx.commit('setLoad', true)
        return fetch(`https://jsonplaceholder.typicode.com/users?${params}`)
          .then(response => response.json()).catch(() => {
            return []
          })
      }

      arrRequiredEmployees.forEach(element => (isNaN(element) ? arrNameRequiredEmployees : arrIdRequiredEmployees).push(element))

      if (arrIdRequiredEmployees.length) {
        paramIdRequiredEmployees = `id=${arrIdRequiredEmployees.join('&id=')}`
        allFetches.push(fetchEmployees(paramIdRequiredEmployees))
      }

      if (arrNameRequiredEmployees.length) {
        paramNameRequiredEmployees = `username=${arrNameRequiredEmployees.join('&username=')}`
        allFetches.push(fetchEmployees(paramNameRequiredEmployees))
      }

      const getUniqueOptions = (options) => {
        return options.reduce(
          (res, cur) =>
            res.find((find) => JSON.stringify(find) === JSON.stringify(cur))
              ? res
              : [...res, cur],
          []
        )
      }

      Promise.allSettled(allFetches)
        .then(results => {
          const arrResponse = []

          results.forEach((result, num) => {
            if (result.status === 'fulfilled') {
              arrResponse.push(result.value)
            }
          })

          ctx.commit('setLoad', false)
          ctx.commit('updateEmployees', getUniqueOptions([].concat(...arrResponse)))
        })
    },

    updateLoad (ctx, payload) {
      ctx.commit('setLoad', payload)
    },

    updateCurrentIdEmployee (ctx, id) {
      ctx.commit('setCurrentIdEmployee', id)
    }
  }
})
