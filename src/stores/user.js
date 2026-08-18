import { loginApi } from "@/apis/user";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useCartStore } from "./cart";
import { mergeCartAPI } from "@/apis/cart";

export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();
    const userInfo = ref({});

    const getUserInfo = async (data) => {
      const res = await loginApi(data);
      userInfo.value = res.result;
      // cartStore.updateNewList();
      // 合并购物车
      mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        }),
      );
    };
    const clearUserInfo = () => {
      userInfo.value = {};
      cartStore.clearCart();
    };
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  {
    persist: true,
  },
);
