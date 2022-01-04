<template>
  <div>
    <film-item
      v-for="item in filmList"
      :key="item.filmId"
      @click="gotoDetail(item)"
      :filmdata="item"
      type="2"
    ></film-item>
  </div>
</template>
<script>
import http from "@/utils/http";
import filmItem from "@/components/film/filmItem";
export default {
  data() {
    return {
      filmList: [],
    };
  },
  components: {
    filmItem,
  },
  mounted() {
    http({
      url: "/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=2518702",
      headers: {
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      this.filmList = res.data.data.films;
    });
  },
  methods: {
    gotoDetail(id) {
      this.$router.push("/detail/" + id);
      console.log(this);
    },
  },
};
</script>