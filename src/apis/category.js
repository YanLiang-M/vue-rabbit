import httpInstance from "@/utils/http";

// 获取二级分类列表
export const getCategoryApi = (id) => {
  return httpInstance.get("/category", {
    params: { id },
  });
};
