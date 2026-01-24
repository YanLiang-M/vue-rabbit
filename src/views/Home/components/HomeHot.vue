<script setup>
import HomePanel from "./HomePanel.vue";
import { getBannerListApi } from "@/apis/home";
import { ref } from "vue";
const hotList = ref([]);
// const getHotList = async () => {
//   const res = await getBannerListApi();
//   hotList.value = res.result;
//   console.log(res);
// };
// getHotList();
hotList.value = [
  {
    id: "1001",
    picture: "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg",
    title: "特惠推荐",
    alt: "它们最实惠",
  },
  {
    id: "1002",
    picture: "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_2.jpg",
    title: "爆款推荐",
    alt: "它们最受欢迎",
  },
  {
    id: "1003",
    picture: "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_3.jpg",
    title: "一站买全",
    alt: "使用场景下精心优选",
  },
  {
    id: "1004",
    picture: "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_4.jpg",
    title: "领券中心",
    alt: "更多超值优惠券",
  },
];
</script>

<template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
    <ul class="goods-list">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
          <el-image :src="item.picture" alt="" lazy />
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
