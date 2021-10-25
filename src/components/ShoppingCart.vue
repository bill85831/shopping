<template>
  <div class="cartContent">
    <table>
      <thead>
        <tr>
          <th colspan="5">Order</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tableTitle">
          <td>品項</td>
          <td>數量</td>
          <td>單價</td>
          <td>小計</td>
          <td></td>
        </tr>
        <tr class="tableBody" v-for="product in productsInCart" :key="product">
          <td>{{ product.name }}</td>
          <td>{{ product.amount }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.sum }}</td>
          <td>
            <button class="delProduct" @click="remove(product)">×</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3"></td>
          <td>
            Total <span class="totalPrice">$ {{ total }}</span>
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
    <button class="checkout">前往付款</button>
  </div>
</template>

<script>
export default {
  props: {
    cartDetail: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    remove(product) {
      product.amount = 0;
    },
  },
  computed: {
    // 購物車裡的品項
    productsInCart() {
      return (
        this.cartDetail
          // 只顯示購買數量 > 0 的項目
          .filter((p) => p.amount)
          // 算出每個產品的小計
          .map((p) => {
            p.sum = p.amount * p.price;
            return p;
          })
      );
    },
    // 目前購買的金額
    total() {
      return this.productsInCart.reduce((a, b) => a + b.sum, 0);
    },
  },
};
</script>

<style scoped>
.cartContent {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px;
}

table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

tr {
  border-bottom: 1px solid #d4e0f0;
}

th,
td {
  min-width: 2em;
  width: 15%;
  padding: 15px;
}

thead {
  color: #e98121;
  font-size: 18px;
  text-align: left;
}

.tableTitle {
  background-color: rgb(124, 218, 221);
  text-align: center;
  font-weight: bolder;
}

.tableBody:nth-child(even) {
  font-size: 14px;
  text-align: center;
  background-color: rgb(238, 238, 238);
}

.tableBody:nth-child(odd) {
  font-size: 14px;
  text-align: center;
  background-color: #fff;
}

.delProduct {
  width: 30px;
  height: 30px;
  outline: 0;
  border: 0;
  padding: 0 0 0.4em;
  color: #b6b6b6;
  font-size: 18px;
  background: transparent;
  cursor: pointer;
}

tfoot {
  background: rgb(124, 218, 221);
}

.totalPrice {
  /* margin-left: 1em; */
  color: #000;
  font-size: 20px;
  text-align: center;
}

.checkout {
  width: 100%;
  margin: 20px 0 0 0;
  outline: 0;
  border: 0;
  padding: 15px 0;
  color: #fff;
  font-size: 18px;
  text-align: center;
  background-color: #e98121;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>
