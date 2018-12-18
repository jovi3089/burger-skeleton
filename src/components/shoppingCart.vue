<template> <!--sätter massa ### för ord som inte ännu är i ui_lang-->
  <div>
    <div id="header"><!--header typ "kundkorg"-->
      <h1>{{uiLabels.shoppingCartTitle}}</h1>
      <button v-on:click="close()">###close the cart###</button>
    </div>
    <div id="orders"><!--innehållet-->
      <h1>{{uiLabels.shoppingCartContent}}</h1>
        <OrderItem
          class="orderItem"
          v-for="(order, key) in orders"
          v-if="order.status !== 'done'"
          :order-id="key"
          :order="order"
          :ui-labels="uiLabels"
          :lang="lang"
          :key="key">
        </OrderItem>
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
      shoppingCart: Array,
      uiLabels: Object,
      order: Object,
      lang: String,
      orderId: String,
      orders: Object
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
    background-color: #a2c4c9ff;
  }
</style>
