<template>
  <div>
    <label>
      <button
      class="singleOrder"
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
button {
  display: inline-flex;
}
.singleOrder{ /*Class for all orders*/
  border: 2px solid;
  border-color: Crimson;
  border-radius: 15px;
  height: 3.5em;
}
.veg{
  background-color: green;
}
.fish{
  background-color: blue;
}
.chicken{
  background-color: yellow;
}
.meat{
  background-color: red;
}
</style>
