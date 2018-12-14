<template>
  <div>
    <label>
      <button
      class="container"
      v-bind:class= "order.orderKitchenCategory"
      v-on:click="orderServed">
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
  name: 'OrderItemDone',
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
  /*
  mounted: function () {
    this.$nextTick(function () {
      this.$refs.timer.resetTimer();
    })
  },*/
  methods: {
    orderServed: function () {
			// sending 'served' message to parent component or view so that it
			// can catch it with v-on:done in the component declaration
			this.$emit('served');  //change order.status to served
      this.$refs.timer.resetTimer();

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
  background-color: blue;
}
.chicken{
  background-color: yellow;
}
.meat{
  background-color: red;
}
</style>
