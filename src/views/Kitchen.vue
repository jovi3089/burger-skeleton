<template>
<div id="orders">
  <h1>{{ uiLabels.ordersInQueue }}</h1>
  <div id="ordersToPrepare">
    <OrderItemToPrepare id="singleOrder"
      v-for="(order, key) in orders"
      v-if="order.status === 'not-started' "
      v-on:started="markStarted(key)"
      :order-id="key"
      :order="order"
      :ui-labels="uiLabels"
      :lang="lang"
      :key="key">
    </OrderItemToPrepare>
  </div>
  <h1>{{ uiLabels.ordersWorkingOn }}</h1>
  <div id="ordersWorkedOn">
    <OrderItemBeingPrepared
      v-for="(order, key) in orders"
      v-if="order.status === 'started'"
      v-on:done="markDone(key)"
      :order-id="key"
      :order="order"
      :ui-labels="uiLabels"
      :lang="lang"
      :key="key">
    </OrderItemBeingPrepared>
  </div>
  <h1>{{ uiLabels.ordersFinished }}</h1>'
  <div id="finishedOrders">
    <OrderItem
      v-for="(order, key) in orders"
      v-if="order.status === 'done'"
      :order-id="key"
      :order="order"
      :lang="lang"
      :ui-labels="uiLabels"
      :key="key">
    </OrderItem> <!-- orders is found in sharedVueStuff.js -->

  </div>
</div>
</template>
<script>
import OrderItem from '@/components/OrderItem.vue'
import OrderItemToPrepare from '@/components/OrderItemToPrepare.vue'
import OrderItemBeingPrepared from '@/components/OrderItemBeingPrepared.vue'

//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default {
  name: 'Ordering',
  components: {
    OrderItem,
    OrderItemToPrepare,
    OrderItemBeingPrepared
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
    },
    markStarted: function (orderid) {
      this.$store.state.socket.emit("orderStarted", orderid)
    }
  }
}
</script>

<style scoped>
	#orders {

    width: 100vw; /*vw 100% of the page width is covered by orders*/
    height: 100vh; /*vw 100% of the page height is covered by orders*/
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
    grid-template-columns: repeat(1,1fr);
    min-height:100%;
    max-height:100%;
    overflow-y: auto;
    grid-row-gap: 1em;

  }
  #singleOrder{
    border: 2px solid;
    border-color: Crimson;
    border-radius: 10px;

  }


  #ordersWorkedOn{
    display: grid;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-template-columns: repeat(1,1fr);
    min-height:100%;
    max-height:100%;
    overflow-y: auto;

  }
  #finishedOrders{
    display: grid;
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-template-columns: repeat(1,1fr);
    min-height:100%;
    max-height:100%;
    overflow-y: auto;

  }

  h1 {
    text-transform: uppercase;
    font-size: 1.4em;
  }
</style>
