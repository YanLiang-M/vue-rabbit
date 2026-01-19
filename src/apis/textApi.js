import httpInstance from "@/utils/http";

export const getCategory = () => httpInstance.get("home/category/head");
