import httpInstance from "@/utils/http";

// 获取轮播图
export const getBannerListApi = (number) => {
  return httpInstance.get("/home/banner", {
    query: { distributionSite: number },
  });
};

// 获取新鲜好物
export const getNewListApi = () => httpInstance.get("/home/new");

// 获取人气推荐
export const getHotListApi = () => httpInstance.get("home/hot");

// 获取产品列表
export const getProductListApi = () => httpInstance.get("home/goods");
