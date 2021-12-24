import Vue from 'vue'
import { Icon, IndexAnchor, IndexBar, Cell, List, NavBar, Search, Col, Row } from 'vant';
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'

Vue.use(Icon).use(IndexAnchor).use(IndexBar).use(Cell).use(List).use(NavBar).use(Search).use(Col).use(Row)
Vue.config.productionTip = false
//添加指令（v-scroll）,监听滚动条事件
Vue.directive('scroll', {
  inserted(el, binding) {
    el.style.display = 'none'
    window.onscroll = () => {
      if ((document.documentElement.scrollTop || document.body.scrollTop) > binding.value) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  //销毁
  unbind() {
    window.onscroll = null
  }
})
Vue.filter('dateformat', (date) => {
  return moment(date * 1000).format('YYYY-MM-DD')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
