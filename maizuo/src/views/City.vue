<template>
  <div class="city">
    <div class="top">
      <van-nav-bar title="当前城市" left-arrow @click-left="onClickLeft">
        <template #left>
          <van-icon name="cross" size="20" color="#191a1b" />
        </template>
      </van-nav-bar>
      <div class="search">
        <van-search
          v-model="value"
          :show-action="showAction"
          placeholder="请输入城市名称或拼音"
          @input="onInput"
          @cancel="onCancel"
        />
      </div>
    </div>
    <div class="content">
      <card title="GPS定位你所在的城市" :cityList="['上海']" />
      <card title="热门城市" :cityList="hotCity" />
      <van-index-bar :index-list="computedList" @select="indexSelect">
        <div v-for="data in cityList" :key="data.type">
          <van-index-anchor :index="data.type" />
          <van-cell
            v-for="item in data.list"
            :key="item.cityId"
            :title="item.name"
            @click="clickCity(item.cityId)"
          />
        </div>
      </van-index-bar>
    </div>
  </div>
</template>
<script>
import http from "@/utils/http";
import card from "@/components/city/card";
import { Toast } from "vant";
export default {
  data() {
    return {
      cityList: [],
      value: "",
      hotCity: [],
    };
  },
  mounted() {
    http({
      url: "/gateway?k=6213424",
      headers: {
        "X-Host": "mall.film-ticket.city.list",
      },
    }).then((res) => {
      let cities = res.data.data.cities;
      this.cityList = this.formatCity(cities);
      this.hotCity = cities
        .filter((item) => item.isHot === 1)
        .map((i) => i.name);
    });
  },
  methods: {
    formatCity(data) {
      //生成26个英文字母
      let letterList = [],
        cityList = [];
      for (var i = 65; i < 91; i++) {
        letterList.push(String.fromCharCode(i));
      }
      //遍历、按首字母对城市进行过滤
      letterList.forEach((item) => {
        //分别按字母过滤后的城市list
        let list = data.filter(
          (i) => i.pinyin.substring(0, 1).toUpperCase() === item
        );
        list.length > 0 &&
          cityList.push({
            type: item,
            list,
          });
      });
      return cityList;
    },
    onClickLeft() {
      this.$router.back();
    },
    onInput(val) {
      console.log(val);
    },
    onCancel() {},
    indexSelect(index) {
      Toast({
        message: index,
        className: "indexToast",
      });
    },
    clickCity(cityId) {
      console.log(cityId);
    },
  },
  computed: {
    computedList() {
      return this.cityList.map((item) => item.type);
    },
    showAction() {
      return this.value != "";
    },
  },
  components: {
    card,
  },
};
</script>
<style lang="scss" scoped>
.city {
  padding-top: 0.93rem;
  background-color: #fff;
  .top {
    height: 0.93rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    .search {
      background-color: #fff;
    }
  }
  .content {
    height: calc(100vh - 1.42rem);
    position: relative;
  }
}
</style>