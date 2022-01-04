import { createApp } from 'vue'
import { Icon, IndexAnchor, IndexBar, Cell, List, NavBar, Search, Col, Row } from 'vant';
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router)
    .use(Icon).use(IndexAnchor).use(IndexBar).use(Cell).use(List).use(NavBar).use(Search).use(Col).use(Row)
    .mount('#app')
