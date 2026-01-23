import httpInstance from "@/utils/http";

// 获取轮播图
export const getBannerListApi = () => httpInstance.get("/home/banner");
