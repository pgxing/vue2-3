<template>
  <div id="nav">
    <router-link to="/films" v-slot="{ navigate, isActive }" class="navItem">
      <img
        :src="
          isActive
            ? require('@/assets/film-select.png')
            : require('@/assets/film.png')
        "
      />
      <span @click="navigate" :class="isActive ? 'active' : ''">电影</span>
    </router-link>
    <router-link to="/cinemas" v-slot="{ navigate, isActive }" class="navItem">
      <img
        :src="
          isActive
            ? require('@/assets/crimal-select.png')
            : require('@/assets/crimal.png')
        "
      />
      <span @click="navigate" :class="isActive ? 'active' : ''">影院</span>
    </router-link>
    <router-link to="/center" v-slot="{ navigate, isActive }" class="navItem">
      <img
        :src="
          isActive
            ? require('@/assets/center-select.png')
            : require('@/assets/center.png')
        "
      />
      <span @click="navigate" :class="isActive ? 'active' : ''">我的</span>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
#nav {
  height: 49px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 999;
  bottom: 0;
  font-size: 14px;
  color: #797d82;
  background-color: #fff;
  .navItem {
    width: 49px;
    height: 49px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 21px;
    height: 21px;
    margin-bottom: 3px;
  }
  .active {
    color: #ff5f16 !important;
  }
}
</style>