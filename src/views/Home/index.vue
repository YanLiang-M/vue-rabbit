<script setup lang="ts">
import HomeBanner from "./components/HomeBanner.vue";
import HomeCategory from "./components/HomeCategory.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeNew from "./components/HomeNew.vue";
import HomePanel from "./components/HomePanel.vue";
import HomeProduct from "./components/HomeProduct.vue";
</script>

<template>
  <div class="container">
    <HomeCategory></HomeCategory>
    <HomeBanner></HomeBanner>
  </div>
  <HomeNew></HomeNew>
  <HomeHot></HomeHot>
  <HomeProduct></HomeProduct>
  <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱"></HomePanel>
  <HomePanel title="人气推荐" subTitle="人气推荐 品质靠谱"></HomePanel>
</template>
