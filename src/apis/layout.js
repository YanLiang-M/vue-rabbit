import httpInstance from "@/utils/http";

export const getCategoryApi = () => httpInstance.get("/home/category/head");
