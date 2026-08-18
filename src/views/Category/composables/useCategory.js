import { getCategoryApi } from "@/apis/category";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export const useCategory = () => {
  const categoryList = ref({});
  const route = useRoute();
  const getCategoryList = async () => {
    const res = await getCategoryApi(route.params.id);
    categoryList.value = res.result;
  };
  getCategoryList();

  watch(route, () => {
    getCategoryList();
  });
  return {
    categoryList,
  };
};
