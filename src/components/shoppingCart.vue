<template> <!--sätter massa ### för ord som inte ännu är i ui_lang-->
  <div id="orders">
    <div id="header"><!--header typ "kundkorg"-->
      <h1>{{uiLabels.shoppingCartTitle}}</h1>
      <button v-on:click="close()">###close the cart###</button>
    </div>
      <h1>{{uiLabels.shoppingCartContent}}</h1>
      <div class="order-item-grid"><!--innehållet-->
          <!--<OrderItem
          class="order-item"
          v-for="(order, key) in orders"
          v-if="order.status !== 'done'"
          :order-id="key"
          :order="order"
          :ui-labels="uiLabels"
          :lang="lang"
          :key="key">
        </OrderItem>-->
      </div>
    <div id="footer"><!--footer med beställknapp-->
      <h1>{{uiLabels.shoppingCartFooter}}</h1>
    </div>
  </div>
</template>
<script>
import OrderItem from '@/components/OrderItem.vue'
export default{
    name: "shoppingCart",
    components:{
      OrderItem
    },
    props: {
      uiLabels: Object,
      lang: String,
      orderId: String,
      orders: Array
    },
    methods: {
      close: function(){
        this.$emit('closeCart');
      }
    },
}
</script>
<style scoped>
  #orders {
  }
  .order-item-grid{
     display: grid;
     grid-template-rows: repeat(auto-fit, 2em);
     grid-gap: 1em;
  }
  .order-item{
    border: 5px solid grey;
    border-radius: 15px;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center ;
  }
</style>
