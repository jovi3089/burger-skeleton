<template>
  <!-- Note in this component that it is using another component -->
<div id="theItem">
  <OrderItem
    :ui-labels="uiLabels"
    :lang="lang"
    :order-id="orderId"
    :order="order">
  </OrderItem>
  <button v-on:click="orderDone">
    {{uiLabels.ready}} <!-- Where is uiLabels.ready?-->
  </button>
  <Timer ref="timer">
  </Timer>
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
    lang: String
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
      this.$refs.timer.stopTimer();
      //this.$refs.timer.startTimer();
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
#theItem{
  background-color: Blue; /*test to see how much the div covers */
}
</style>
