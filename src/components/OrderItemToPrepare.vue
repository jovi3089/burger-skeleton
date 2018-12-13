<template>
  <!-- Note in this component that it is using another component -->
<div>
  <label>
    <button
    class="container"
    v-bind:class= "order.orderKitchenCategory"
    v-on:click="orderStart">
      <OrderItem id="item"
        :ui-labels="uiLabels"
        :lang="lang"
        :order-id="orderId"
        :order="order">
      </OrderItem>
      <Timer id="timer" ref="timer">
      </Timer>
    </button>
  </label>
</div>
</template>
<script>
import OrderItem from '@/components/OrderItem.vue'
import Timer from '@/components/Timer.vue'


export default {
  name: 'OrderItemToPrepare',
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
    orderStart: function () {
      // sending 'done' message to parent component or view so that it
      // can catch it with v-on:done in the component declaration
      this.$emit('started');  //change order.status to started
      this.$refs.timer.resetTimer();
    },
    cancelOrder: function () {
      // not implemented
    }
  }
}
</script>
<style scoped>
.container{ 
  height: auto;
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
#item {
  background-color: black;
}
#timer {
  background-color: white;
}
</style>
