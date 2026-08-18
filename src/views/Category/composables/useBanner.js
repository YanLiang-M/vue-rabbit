import { ref } from "vue";
import { getBannerListApi } from "@/apis/home";

export const useBanner = () => {
  const bannerList = ref([]);
  const getBannerList = async () => {
    const res = await getBannerListApi(2);
    bannerList.value = res.result;
  };
  getBannerList();
  return {
    bannerList,
  };
};
