import store from '@/store';
const obj = {
    mounted() {
        store.commit('hideTabBar')
    },
    destroyed() {
        store.commit('showTabBar')
    }
}
export default obj