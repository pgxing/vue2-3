import { createApp } from 'vue'
import { Icon, IndexAnchor, IndexBar, Cell, List, NavBar, Search, Col, Row,Toast } from 'vant';
import App from './App.vue'
// import App from './base/09-app.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router)
    .use(Icon).use(IndexAnchor).use(IndexBar).use(Cell).use(List).use(NavBar).use(Search).use(Col).use(Row).use(Toast)
    .directive('scroll', {
        mounted(el, binding) {
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
        unmounted() {
            window.onscroll = null
        }
    }).mount('#app')
