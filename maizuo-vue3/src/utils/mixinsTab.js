import store from '@/store';
const obj = {
    mounted() {
        store.commit('hideTabBar')
    },
    unmounted() {
        store.commit('showTabBar')
    }
}
export default obj