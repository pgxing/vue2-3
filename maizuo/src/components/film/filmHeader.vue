<template>
  <div class="filmbar">
    <router-link to="/films/showing" v-slot="{ navigate, isActive }">
      <span @click="navigate" :class="isActive ? 'active' : ''">正在热映</span>
    </router-link>
    <router-link to="/films/comingsoon" v-slot="{ navigate, isActive }">
      <span @click="navigate" :class="isActive ? 'active' : ''">即将上映</span>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.filmbar {
  background-color: #fff;
  height: 0.49rem;
  line-height: 0.49rem;
  display: flex;
  justify-content: space-around;
  font-size: 0.14rem;
  .active {
    display: inline-block;
    width: 0.56rem;
    color: #ff5f16;
    border-bottom: 2px solid #ff5f16;
  }
}
</style>