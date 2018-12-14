<template>

	<div class="wrapper">
			{{orderId}} {{order.type}} {{uiLabels.ingredients}}: {{ order.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }}
	</div>


</template>
<script>
export default {
  name: 'OrderItem',
  props: {
    uiLabels: Object,
    order: Object,
    orderId: String,
    lang: String
  }
}
</script>
<style scoped>
/*
.wrapper {
	display: grid;
	grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
	grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
}
.a{
	grid-column: 1 \ 3;
	grid-row: 1;
}
*/
</style>
