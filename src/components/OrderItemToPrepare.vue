<template>
  <!-- Note in this component that it is using another component -->
<div>
  <OrderItem
    :ui-labels="uiLabels"
    :lang="lang"
    :order-id="orderId"
    :order="order">
  </OrderItem>
  
  <button v-on:click="orderStart">
    {{uiLabels.started}}
  </button>
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
  methods: {
    orderStart: function () {
      // sending 'done' message to parent component or view so that it
      // can catch it with v-on:done in the component declaration
      this.$emit('started');  //change order.status to started

    },
    cancelOrder: function () {
      // not implemented
    }
  }
}
</script>
<style scoped>

</style>
