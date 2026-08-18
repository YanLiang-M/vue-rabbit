// 用户相关接口请求
import httpInstance from "@/utils/http";

export const loginApi = ({ account, password }) => {
  return httpInstance.post("/login", {
    account,
    password,
  });
};
