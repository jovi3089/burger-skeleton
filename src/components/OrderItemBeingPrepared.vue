<template>
  <div>
    <label>
      <button
      class="container"
      v-bind:class= "order.orderKitchenCategory"
      v-on:click="orderDone">
        <OrderItem
          :ui-labels="uiLabels"
          :lang="lang"
          :order-id="orderId"
          :order="order">
        </OrderItem>
        <Timer ref="timer">
        </Timer>
      </button>
    </label>
  </div>
</template>
<script>
import OrderItem from '@/components/OrderItem.vue'
import Timer from '@/components/Timer.vue'

export default {
  name: 'OrderItemBeingPrepared',
  components: {
    OrderItem,
    Timer
   },
  props: {
    uiLabels: Object,
    order: Object,
    orderId: String,
    lang: String,


  },
  mounted: function () {
    this.$nextTick(function () {
      this.$refs.timer.startTimer();
  })
},
  methods: {
    orderDone: function () {

      // sending 'done' message to parent component or view so that it
      // can catch it with v-on:done in the component declaration
      this.$emit('done'); //change order.status to done
      this.$refs.timer.resetTimer();
    },
    startTimer: function () {
      //this.$refs.timer.startTimerr();
      this.console.log("jag ar i orderBEing");
    },
    cancelOrder: function () {
      // not implemented
    }
  }
}
</script>
<style scoped>
button:hover {
  background-color: lightgreen;
}
.container{ /*Class for all orders*/
  display: block;
  width: 100%;
  height: auto;
  border: 2px solid;
  border-color: Crimson;
  border-radius: 15px;
}
.veg{
  background-color: green;
}
.fish{
  background-color: CornFlowerBlue;
}
.chicken{
  background-color: yellow;
}
.meat{
  background-color: red;
}
</style>
