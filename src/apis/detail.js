import httpInstance from "@/utils/http";

// 获取商品详情
export const getDetailApi = (id) => {
  return httpInstance.get("goods", {
    params: {
      id,
    },
  });
};

// 获取热榜商品
export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return httpInstance.get("/goods/hot", {
    params: {
      id,
      type,
      limit,
    },
  });
};
