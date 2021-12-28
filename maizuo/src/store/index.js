import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/utils/http'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    reducer(val) {
      return {
        cityId: val.cityId,
        cityName: val.cityName
      }
    }
  })],
  state: {
    cityName: '上海',
    cityId: 310100,
    cinemasList: [],
    isShowTabBar: true
  },
  // 同步
  mutations: {
    changeCityName(state, val) {
      state.cityName = val.name
      state.cityId = val.cityId
    },
    setCinemasList(state, val) {
      state.cinemasList = val
    },
    clearCniemasList(state) {
      state.cinemasList = []
    },
    showTabBar(state) {
      state.isShowTabBar = true
    },
    hideTabBar(state) {
      state.isShowTabBar = false
    }
  },
  // 异步
  actions: {
    getCinemas(store) {
      return http({
        url: `/gateway?cityId=${store.state.cityId}&ticketFlag=1&k=6173915`,
        headers: {
          "X-Host": "mall.film-ticket.cinema.list",
        },
      }).then(res => {
        store.commit('setCinemasList', res.data.data.cinemas)
      });
    }
  },
  modules: {
  }
})
