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



    <div class="container" v-show = "page===1">  <!--Work flow for orders-->
      <div class="wrapper">
        <div class="itemA">
          <div class="title">
            <p>{{ uiLabels.ordersInQueue }}</p>
          </div>
        </div>
        <div class="itemB">
          <div class="title">
            {{ uiLabels.ordersWorkingOn }}
          </div>
        </div>
        <div class="itemC">
          <div class="title">
            {{ uiLabels.ordersFinished }}
          </div>
        </div>

        <div class="ordersToPrepare">
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
        <div class="ordersWorkedOn">
          <OrderItemBeingPrepared
            ref="timer"
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
        <div class="finishedOrders">
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
          <div class="backButton">
          <label>
            <button v-on:click="changePage(0)">
              {{uiLabels.back}}
            </button>
          </label>
        </div>

      </div>
    </div>

    <div v-show = "page===2">  <!--Saldo -->
      <IngredientSaldo
      :ingred="ingredients"
      :lang="lang"
      >
      </IngredientSaldo>
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
import IngredientSaldo from '@/components/IngredientSaldo.vue'



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
    IngredientSaldo
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
.container {
  /*position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;*/
  padding: 0px;
}

.wrapper {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 5% auto 5%;
  grid-gap: 0.5em;
  border: 4px solid black;
  padding: 1em 1em 1em 1em;
  /*
  justify-content: stretch;
  align-items: start;*/
}
.itemA {
  grid-column: 1;
  grid-row: 1;
  border: 5px solid grey;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.itemB {
  grid-column: 2;
  grid-row: 1;
  border: 5px solid grey;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.itemC {
  grid-column: 3;
  grid-row: 1;
  border: 5px solid grey;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

 .ordersToPrepare{
    grid-column: 1;
    grid-row: 2;
    border: 5px solid grey;
    border-radius: 15px;
    overflow-y: scroll;
  }

  .ordersWorkedOn{
    grid-column: 2;
    grid-row: 2;
    border: 5px solid grey;
    border-radius: 15px;
    overflow-y: scroll;
  }

  .finishedOrders{
    grid-column: 3;
    grid-row: 2;
    border: 5px solid grey;
    border-radius: 15px;
    overflow-y: scroll;
  }

.title {
    display: block;
    text-transform: uppercase;
    padding-left: 1em;
    font-size: 2vw;
    font-style: italic;
    font-weight: bold;
  }

.backButton{
  grid-column: 3;
}


  button {

    float: right;

  }

</style>
