//购物车模块
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";
import { addCartAPI, delCartAPI, getNewCartListAPI } from "@/apis/cart";
import { ElMessage } from "element-plus";

export const useCartStore = defineStore(
  "cart",
  () => {
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.userInfo.token);
    // 定义state
    const cartList = ref([]);
    // 定义action

    // 获取最新购物车列表
    const updateNewList = async () => {
      const res = await getNewCartListAPI();
      cartList.value = res.result;
    };

    // 添加购物车操作
    const addCart = async (goods) => {
      if (isLogin.value) {
        const { skuId, count } = goods;
        await addCartAPI({ skuId, count });
        updateNewList();
      } else {
        const item = cartList.value.find((item) => goods.skuId === item.skuId);
        if (item) {
          item.count = item.count + goods.count;
        } else {
          cartList.value.push(goods);
        }
      }
    };
    // 删除购物车
    const delCart = async (skuId) => {
      if (isLogin.value) {
        await delCartAPI([skuId]);
        updateNewList();
        ElMessage.success("删除购物车成功");
      } else {
        const newList = cartList.value.filter((item) => item.skuId !== skuId);
        cartList.value = newList;
      }
    };

    // 清除购物车
    const clearCart = () => {
      cartList.value = [];
    };

    // 单选功能
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId);
      item.selected = selected;
    };
    // 全选功能
    const allCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected));
    };

    // 计算属性
    // 总的数量，所有count之和
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0));
    // 总的价格
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0));
    // 全选
    const isAll = computed(() => cartList.value.every((item) => item.selected));
    // 3. 已选择数量
    const selectedCount = computed(() =>
      cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count, 0),
    );
    // 4. 已选择商品价钱合计
    const selectedPrice = computed(() =>
      cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count * c.price, 0),
    );
    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      isAll,
      allCheck,
      selectedCount,
      selectedPrice,
      clearCart,
      updateNewList,
    };
  },
  {
    persist: true,
  },
);
