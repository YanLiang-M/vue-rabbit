import { ref } from "vue";
import { defineStore } from "pinia";
import { getCategoryApi } from "@/apis/layout";

export const useCategoryStore = defineStore("category", () => {
  const categoryList = ref([]);
  const getCategoryList = async () => {
    const res = await getCategoryApi();
    categoryList.value = res.result;
  };
  return { categoryList, getCategoryList };
});
