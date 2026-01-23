import httpInstance from "@/utils/http";

// 获取轮播图
export const getBannerListApi = () => httpInstance.get("/home/banner");

// 获取新鲜好物
export const getNewListApi = () => httpInstance.get("/home/new");
