<template>
  <div>
    <van-list
      v-model:loading="loading"
      :finished="finished"
      loading-text="加载中..."
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
    >
      <film-item
        v-for="item in filmList"
        :key="item.filmId"
        :filmdata="item"
        type="1"
      ></film-item>
    </van-list>
  </div>
</template>
<script>
import http from "@/utils/http";
import filmItem from "@/components/film/filmItem";
import { ref } from "vue";

export default {
  setup() {
    const loading = ref(false);
    const finished = ref(false);
    const filmList = ref([]);
    const total = ref(0);
    const current = ref(1);

    const getData = () => {
      http({
        url: `/gateway?cityId=310100&pageNum=${current.value}&pageSize=10&type=1&k=1918992`,
        headers: {
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        //修改loading状态，才能进行下一次加载
        loading.value = false;
        filmList.value = [...filmList.value, ...res.data.data.films];
        total.value = res.data.data.total;
        //页码+1
        current.value++;
      });
    };
    getData();
    const onLoad = () => {
      //当前数据总长度小于数据总数时，继续加载数据，否则修改finised为true
      if (filmList.value.length < total.value) {
        getData();
      } else {
        finished.value = true;
      }
    };
    return {
      filmList,
      onLoad,
      loading,
      finished,
    };
  },
  components: {
    filmItem,
  }
};
</script>