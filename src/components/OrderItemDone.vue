<template>
  <!-- Note in this component that it is using another component -->
<div>
  <OrderItem
    :ui-labels="uiLabels"
    :lang="lang"
    :order-id="orderId"
    :order="order">
  </OrderItem>
  <button v-on:click="orderServed">
    {{uiLabels.served}}
  </button>
</div>
</template>
<script>
import OrderItem from '@/components/OrderItem.vue'

export default {
  name: 'OrderItemDone',
  components: { OrderItem },
  props: {
    uiLabels: Object,
    order: Object,
    orderId: String,
    lang: String
  },
  methods: {
    orderServed: function () {
			// sending 'served' message to parent component or view so that it
			// can catch it with v-on:done in the component declaration
			this.$emit('served');  //change order.status to served
		},
    cancelOrder: function () {
      // not implemented
    }
  }
}
</script>
<style scoped>

</style>
