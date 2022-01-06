<template>
  <div>
    <film-item
      v-for="item in filmList"
      :key="item.filmId"
      :filmdata="item"
      type="2"
    ></film-item>
  </div>
</template>
<script>
//vue3-函数组件
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import http from "@/utils/http";
import filmItem from "@/components/film/filmItem";
export default {
  components: {
    filmItem,
  },
  //函数组件
  setup() {
    const router = useRouter();
    const state = reactive({
      filmList: [],
    });
    const gotoDetail = (id) => {
      router.push("/detail/" + id);
    };
    onMounted(() => {
      http({
        url: "/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=2518702",
        headers: {
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        state.filmList = res.data.data.films;
      });
    });
    return {
      ...toRefs(state),
      gotoDetail,
    };
  },
};
//类组件
// import http from "@/utils/http";
// import filmItem from "@/components/film/filmItem";
// export default {
//   data() {
//     return {
//       filmList: [],
//     };
//   },
//   components: {
//     filmItem,
//   },
//   mounted() {
//     http({
//       url: "/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=2518702",
//       headers: {
//         "X-Host": "mall.film-ticket.film.list",
//       },
//     }).then((res) => {
//       this.filmList = res.data.data.films;
//     });
//   },
//   methods: {
//     gotoDetail(id) {
//       this.$router.push("/detail/" + id);
//       console.log(this);
//     },
//   },
// };
</script>