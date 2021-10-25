<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <Lottery /> -->

  <div class="main_content">
    <div
      v-for="tab in tabs"
      :key="tab"
      :class="['tab_title', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </div>

    <keep-alive>
      <component
        :is="currentTab"
        :product-detail="products"
        :cart-detail="products"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Lottery from "./components/Lottery.vue";
import Product from "./components/Product.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

export default {
  name: "App",
  components: {
    Product,
    ShoppingCart,
  },
  data() {
    return {
      currentTab: "Product",
      tabs: ["Product", "ShoppingCart"],
      products: [
        {
          id: "63",
          name: "凱西",
          price: 180,
          thumb:
            "https://s1.52poke.wiki/wiki/thumb/6/62/063Abra.png/300px-063Abra.png",
          amount: 0,
          amountShow: 1,
          showingIcon: false,
        },
        {
          id: "35",
          name: "皮皮",
          price: 500,
          thumb:
            "https://s1.52poke.wiki/wiki/thumb/f/f4/035Clefairy.png/300px-035Clefairy.png",
          amount: 0,
          amountShow: 1,
          showingIcon: false,
        },
        {
          id: "147",
          name: "迷你龍",
          price: 2800,
          thumb:
            "https://s1.52poke.wiki/wiki/thumb/c/cc/147Dratini.png/300px-147Dratini.png",
          amount: 0,
          amountShow: 1,
          showingIcon: false,
        },
        {
          id: "123",
          name: "飛天螳螂",
          price: 5500,
          thumb:
            "https://s1.52poke.wiki/wiki/thumb/b/ba/123Scyther.png/300px-123Scyther.png",
          amount: 0,
          amountShow: 1,
          showingIcon: false,
        },
        {
          id: "127",
          name: "凱羅斯",
          price: 6500,
          thumb:
            "https://s1.52poke.wiki/wiki/thumb/7/71/127Pinsir.png/300px-127Pinsir.png",
          amount: 0,
          amountShow: 1,
          showingIcon: false,
        },
        {
          id: "137",
          name: "多邊獸",
          price: 9999,
          thumb:
            "https://s1.52poke.wiki/wiki/thumb/6/6b/137Porygon.png/300px-137Porygon.png",
          amount: 0,
          amountShow: 1,
          showingIcon: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.main_content {
  margin: 0 auto;
  width: 1000px;
  height: 850px;
  /* display: flex;
    align-items: flex-start; */
  border: 1px solid rgb(184, 121, 69);
  background-color: rgba(231, 174, 120, 0.2);
}

.tab_title {
  display: inline-block;
  margin: 0;
  color: #c2c2c2;
  font-size: 14px;
  line-height: 4em;
  text-align: center;
  text-transform: uppercase;
  background: #fff;
  border: 0.1px solid rgb(196, 192, 190);
  position: relative;
  width: 50%;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 8px rgb(105, 104, 103);
}

.tab_title::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4px;
}

.active {
  color: #2a72cf;
}

.active::after {
  background: #1f64cc;
  transform: translate(0, 0);
}
</style>
