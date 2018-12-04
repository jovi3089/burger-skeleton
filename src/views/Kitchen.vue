<template>
<div id="orders">
  <h1>{{ uiLabels.ordersInQueue }}</h1>
  <div id="ordersToPrepare">
    <OrderItemToPrepare
      v-for="(order, key) in orders"
      v-if="order.status !== 'done'"
      v-on:done="markDone(key)"
      :order-id="key"
      :order="order"
      :ui-labels="uiLabels"
      :lang="lang"
      :key="key">
    </OrderItemToPrepare>
  </div>
  <h1>{{ uiLabels.ordersWorkingOn }}</h1>
  <!--uiLabels.text - add key "text"
   into ui_en.json and ui_sv.json with
  following value-->
  <div id="ordersWorkedOn">
  </div>
  <h1>{{ uiLabels.ordersFinished }}</h1>
  <div id="finishedOrders">
    <OrderItem
      v-for="(order, key) in orders"
      v-if="order.status === 'done'"
      :order-id="key"
      :order="order"
      :lang="lang"
      :ui-labels="uiLabels"
      :key="key">
    </OrderItem>
  </div>
</div>
</template>
<script>
import OrderItem from '@/components/OrderItem.vue'
import OrderItemToPrepare from '@/components/OrderItemToPrepare.vue'

//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default {
  name: 'Ordering',
  components: {
    OrderItem,
    OrderItemToPrepare
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
                            //the ordering system and the kitchen
  data: function(){
    return {
      chosenIngredients: [],
      price: 0
    }
  },
  methods: {
    markDone: function (orderid) {
      this.$store.state.socket.emit("orderDone", orderid);
    }
  }
}
</script>

<style scoped>
	#orders {
    display: grid;
    justify-content: space-even;
    grid-template-columns: 33% 33% 33%;
    font-size: 24pt;
  }

  #ordersToPrepare{
    display: grid;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-template-columns: repeat(3,1fr);
  }
  #ordersWorkedOn{
    display: grid;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-template-columns: repeat(3,1fr);
  }
  #finishedOrders{
    display: grid;
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-template-columns: repeat(3,1fr);
  }

  h1 {
    text-transform: uppercase;
    font-size: 1.4em;
  }
</style>
