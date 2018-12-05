<template>
<div id="orders">
  <h1>{{ uiLabels.ordersInQueue }}</h1>
  <div id="ordersToPrepare">
    <OrderItemToPrepare class="singleOrder"
      v-for="(order, key) in orders"
      v-if="order.status === 'not-started'"
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
    <OrderItemBeingPrepared class="singleOrder"
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
  <h1>{{ uiLabels.ordersFinished }}</h1>
  <div id="finishedOrders">
<<<<<<< HEAD
    <OrderItem class="singleOrder"
=======
    <OrderItemDone
>>>>>>> c02fc51b8220a59c4730b5db55a899fcfe79c2be
      v-for="(order, key) in orders"
      v-if="order.status === 'done'"
      v-on:served="markServed(key)"
      :order-id="key"
      :order="order"
      :lang="lang"
      :ui-labels="uiLabels"
      :key="key">
    </OrderItemDone> <!-- orders is found in sharedVueStuff.js -->

  </div>
</div>
</template>
<script>
import OrderItem from '@/components/OrderItem.vue'
import OrderItemToPrepare from '@/components/OrderItemToPrepare.vue'
import OrderItemBeingPrepared from '@/components/OrderItemBeingPrepared.vue'
import OrderItemDone from '@/components/OrderItemDone.vue'

//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default {
  name: 'Ordering',
  components: {
    OrderItem,
    OrderItemToPrepare,
    OrderItemBeingPrepared,
    OrderItemDone
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
    },
    markServed: function (orderid) {
      this.$store.state.socket.emit("orderServed", orderid)
    } // these communicates with serve.js
  }
}
</script>

<style scoped>
	#orders {
    width: 100vw; /*vw 100% of the page width is covered by orders*/
    height: 100vh; /*vw 100% of the page height is covered by orders*/
    display: grid;
    justify-content: flex-start;
    grid-template-columns: 33% 33% 33%;
    font-size: 24pt;
    grid-row-gap: 1em;
    grid-column-gap: .5em;
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
  }
  .singleOrder{ /*Class for all orders*/
    border: 2px solid;
    border-color: Crimson;
    border-radius: 10px;
    height: 3.5em;
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
