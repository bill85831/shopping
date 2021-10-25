<template>
  <div class="productContent">
    <div class="product" v-for="product in productDetail" :key="product">
      <div class="infoBox">
        <img :src="product.thumb" />
        <div>
          <h2>{{ product.name }}</h2>
          <p>{{ product.price }}</p>
        </div>
      </div>
      <div class="actionBox">
        <div>
          <button class="leftQuantity" @click="minusOne(product)">-</button>
          <span>{{ product.amountShow }}</span>
          <button class="rightQuantity" @click="addOne(product)">+</button>
        </div>
        <button class="addToCart" @click="addToCart(product)">
          add to cart
        </button>
      </div>

      <div class="iconContent" :class="{ showing: product.showingIcon }">
        <svg class="icon" viewBox="0 0 100 100" width="80" height="80">
          <circle class="circle" cx="50" cy="50" r="48"></circle>
          <polyline class="check" points="28,53 42,66 74,34"></polyline>
        </svg>
        <p>成功加入購物車</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productDetail: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    minusOne(product) {
      product.amountShow--;
      product.amountShow = product.amountShow < 1 ? 1 : product.amountShow;
    },
    addOne(product) {
      product.amountShow++;
      product.amountShow = product.amountShow > 9 ? 9 : product.amountShow;
    },

    // 點擊 add to cart 後的動作
    addToCart(product) {
      product.amount += product.amountShow;

      product.showingIcon = true;
      setTimeout(() => {
        product.showingIcon = false;
      }, 800);
    },
  },
};
</script>

<style scoped>
.productContent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px;
}

.product {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 0 0 46%;
  margin: 2%;
  position: relative;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.infoBox {
  display: flex;
  width: 100%;
}

img {
  width: 150px;
  height: 150px;
  margin: 0 10px 0 0;
  object-fit: contain;
}

h2 {
  margin: 10px 0;
  font-size: 18px;
}

.infoBox p {
  margin: 0;
  color: #aba6a6;
}

.infoBox p::before {
  content: "$";
  margin-right: 0.3em;
}

.actionBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f3f3f3;
  width: 90%;
  padding: 10px 10px 10px 15px;
}

.leftQuantity {
  width: 30px;
  height: 30px;
  outline: 0;
  border: 0;
  color: #fff;
  font-size: 18px;
  background: #c3c3c3;
  border-radius: 100% 0% 0% 100%;
  cursor: pointer;
}

.rightQuantity {
  width: 30px;
  height: 30px;
  outline: 0;
  border: 0;
  color: #fff;
  font-size: 18px;
  background: #c3c3c3;
  border-radius: 0% 100% 100% 0%;
  cursor: pointer;
}

span {
  margin: 20px;
  font-size: 18px;
  text-align: center;
}

.addToCart {
  outline: 0;
  border: 0;
  padding: 10px 20px;
  /* margin: 0 0 0 30px; */
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  background: #e98121;
  cursor: pointer;
}

.iconContent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  height: 100%;
  color: #2a72cf;
  font-size: 20px;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.icon {
  margin: 10% 0 0 0;
}

.iconContent .circle,
.iconContent .check {
  fill: none;
  stroke: #2a72cf;
  stroke-width: 3;
}

.iconContent .check {
  stroke-dasharray: 80;
  stroke-dashoffset: 80;
}

.iconContent .circle {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}

.iconContent.showing {
  opacity: 1;
  pointer-events: auto;
}

.iconContent.showing .circle {
  animation: circle 0.4s cubic-bezier(0.5, 0, 0.6, 1) forwards;
}

.iconContent.showing .check {
  animation: check 0.3s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.2s;
}

.iconContent p {
  color: #2a72cf;
}

@keyframes circle {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 2000;
  }
}

@keyframes check {
  from {
    stroke-dashoffset: 80;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
