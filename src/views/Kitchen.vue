<template>
  <div class="root">
    <div class="homePage" v-show = "page===0">  <!--Home page for staff -->

          <StaffHomePage
          v-on:workFlow="changePage(1)"
          v-on:saldo="changePage(2)"
          v-on:statistics="changePage(3)"
          :ui-labels="uiLabels"
          :lang="lang">
          </StaffHomePage>
    </div>

    <div class="work" v-show = "page===1">  <!--Work flow for orders-->
      <div class="wrapper">
        <div class="row1 A">
          <div class="title">
            <p>{{ uiLabels.ordersInQueue }}</p>
          </div>
        </div>
        <div class="row1 B">
          <div class="title">
            {{ uiLabels.ordersWorkingOn }}
          </div>
        </div>
        <div class="row1 C">
          <div class="title">
            {{ uiLabels.ordersFinished }}
          </div>
        </div>

        <div class="row2 ordersToPrepare"> <!-- here's where all the new orders go -->
          <OrderItemToPrepare
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
        <div class="row2 ordersWorkedOn">
          <OrderItemBeingPrepared
            ref="timer"
            li v-for="(order, key) in orders"
            v-if="order.status === 'started'"
            v-on:done="markDone(key)"
            :order-id="key"
            :order="order"
            :ui-labels="uiLabels"
            :lang="lang"
            :key="key">
          </OrderItemBeingPrepared>
        </div>
        <div class="row2 finishedOrders">
          <OrderItemDone
            v-for="(order, key) in orders"
            v-if="order.status === 'done'"
            v-on:served="markServed(key)"
            :order-id="key"
            :order="order"
            :lang="lang"
            :ui-labels="uiLabels"
            :key="key">
          </OrderItemDone>
        </div>
      </div>
      <label>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <button id="backButton" v-on:click="changePage(0)">
          <i class="fa fa-arrow-left" style="font-size:1em;"> </i>    Back
        </button>
      </label>
    </div>

    <div v-show = "page===2">  <!--Saldo -->
      <IngredientSaldo
      :ingredients="ingredients"
      :lang="lang"
      >
      </IngredientSaldo>
      <label>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <button id="backButton" v-on:click="changePage(0)">
          <i class="fa fa-arrow-left" style="font-size:1em;"> </i>    Back
        </button>
      </label>
    </div>

    <div v-show = "page===3">  <!--Product statistics -->
      <Statistics
      :orders="orders"
      :ingredients="ingredients"
      :ui-labels="uiLabels"
      :lang="lang"
      >
      </Statistics>

      <label>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <button id="backButton" v-on:click="changePage(0)">
          <i class="fa fa-arrow-left" style="font-size:1em;"> </i>    Back
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
import IngredientSaldo from '@/components/IngredientSaldo.vue'
import Statistics from '@/components/Statistics.vue'



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
    Timer,
    IngredientSaldo,
    Statistics
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

.wrapper {
  height: 92vh;
  width: 100%;
  display: grid;
  grid-template-rows: 5% auto;
  grid-gap: 0.5em;
  /*border: 4px solid black;*/
  padding: 0 0 0 0;
}

.row1{
  grid-row: 1;
  border: 5px solid grey;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.A {
  grid-column: 1;
}
.B {
  grid-column: 2;
}
.C {
  grid-column: 3;
}

.row2{
  grid-row: 2;
  border: 5px solid grey;
  border-radius: 15px;
  overflow-y: scroll;
}
.ordersToPrepare{
    grid-column: 1;
}
.ordersWorkedOn{
    grid-column: 2;
}
.finishedOrders{
    grid-column: 3;
}

.title {
    display: block;
    text-transform: uppercase;
    padding-left: 1em;
    font-size: 2vw;
    font-style: italic;
    font-weight: bold;
}

#backButton{
  background-color: #a2c4c9ff;
  border-radius: 20px;
  font-size: 5vh;
  padding: 0 1em 0 0.5em;
  left: 5px;
  position: absolute;
}


  button {

    float: right;

  }

</style>
