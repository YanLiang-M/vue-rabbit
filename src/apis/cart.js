import httpInstance from "@/utils/http";

// 加入购物车
export const addCartAPI = ({ skuId, count }) => {
  return httpInstance.post("member/cart", {
    skuId,
    count,
  });
};

// 获取最新购物车列表
export const getNewCartListAPI = () => {
  return httpInstance.get("member/cart");
};

// 删除购物车
export const delCartAPI = (ids) => {
  return httpInstance.delete("member/cart", {
    data: {
      ids,
    },
  });
};

// 合并购物车
export const mergeCartAPI = (data) => {
  return httpInstance.post("member/cart/merge", data);
};
