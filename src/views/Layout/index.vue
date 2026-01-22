<script setup lang="ts">
import { useCategoryStore } from "@/stores/category";
import LayoutFixed from "./components/LayoutFixed.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";

const categoryStore = useCategoryStore();
categoryStore.getCategoryList();
</script>

<template>
  <div>
    <LayoutFixed></LayoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <RouterView></RouterView>
    <LayoutFooter></LayoutFooter>
  </div>
</template>
