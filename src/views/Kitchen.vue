<template>
  <div class="root">
    <div class="homePage" v-show = "page===0">  <!--Home page for staff -->
          <StaffHomePage
          v-on:workFlow="changePage(1)"
          v-on:saldo="changePage(2)"
          v-on:statistics="changePage(3)"
          :ui-labels="uiLabels"
          :lang="lang"
          >
          </StaffHomePage>
        </div>

    <div v-show = "page===0">  <!--Home page for staff -->
      <button v-on:click="changePage(1)">Go to work flow</button>

    </div>
    <div v-show = "page===1">  <!--Work flow for orders-->
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
          <OrderItemBeingPrepared ref="timer" class="singleOrder"
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
          <OrderItemDone class="singleOrder"
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
        <label>
          <button class="backButton" v-on:click="changePage(0)">
            {{uiLabels.back}}
          </button>
        </label>
      </div>
    </div>
    <div v-show = "page===2">  <!--Saldo -->
      <label>
        <button class="backButton" v-on:click="changePage(0)">
          {{uiLabels.back}}
        </button>
      </label>
    </div>
    <div v-show = "page===3">  <!--Product statistics -->
      <label>
             <button class="backButton" v-on:click="changePage(0)">
               {{uiLabels.back}}
             </button>
           </label>
    </div>

  </div>
</template>
<script>
import OrderItem from '@/components/OrderItem.vue'
import OrderItemToPrepare from '@/components/OrderItemToPrepare.vue'
import OrderItemBeingPrepared from '@/components/OrderItemBeingPrepared.vue'
import OrderItemDone from '@/components/OrderItemDone.vue'
import StaffHomePage from '@/components/StaffHomePage.vue'
import Timer from '@/components/Timer.vue'

//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default {
  name: 'Ordering',
  components: {
    OrderItem,
    OrderItemToPrepare,
    OrderItemBeingPrepared,
    OrderItemDone,
   StaffHomePage,
   Timer
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
                            //the ordering system and the kitchen
  data: function(){
    return {
      chosenIngredients: [],
      price: 0,
      page: 0
    }
  },
  methods: {
    markDone: function (orderid) {
      this.$store.state.socket.emit("orderDone", orderid);
    },
    markStarted: function (orderid) {
      this.$store.state.socket.emit("orderStarted", orderid)
      //this.$refs.beingPrep.startTimer()
    },
    markServed: function (orderid) {
      this.$store.state.socket.emit("orderServed", orderid)
    }, // these communicates with serve.js
    changePage: function (pageNr) {
      this.page = pageNr;
    }
  }
}
</script>

<style scoped>
	#orders {
    width: 100vw; /*vw 100% of the page width is covered by orders*/
    height: 100vh; /*vw 100% of the page height is covered by orders*/
    display: grid;
    justify-content: flex-start; /*The items start at top*/
    grid-template-columns: 33% 33% 33%;
    font-size: 24pt;
    grid-row-gap: 1em;
    grid-column-gap: .5em;
    min-height:100%;
    max-height:100%;
  }

  #ordersToPrepare{
    display: grid;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-template-columns: repeat(1, minmax(1em 1fr));
    /*overflow-y: auto;*/
  }
  .singleOrder{ /*Class for all orders*/
    border: 2px solid;
    border-color: Crimson;
    border-radius: 15px;
    height: 3.5em;
  }

  #ordersWorkedOn{
    display: grid;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-template-columns: repeat(1, minmax(1em 1fr));
    overflow-y: auto;
  }

  .homePage {
    }
   .backButton {
     position:absolute;
     top:0;
     right:0;
   }

  #finishedOrders{
    display: grid;
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-template-columns: repeat(1, minmax(1em 1fr));
    overflow-y: auto;
  }

  h1 {
    text-transform: uppercase;
    font-size: 1.4em;
  }
</style>
