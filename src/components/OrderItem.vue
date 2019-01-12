<template>

	<div v-on:click="changeIngredients()" class="bubble">
			<!--All the ingredients should go here-->
 			<span id="ingred">{{uiLabels.ingredients}}:</span> {{ order.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }}
	</div>


</template>
<script>
export default {
  name: 'OrderItem',
  props: {
    uiLabels: Object,
		lang: String,
		orderId: String,
    order: Object
  },
	methods:{
		changeIngredients: function(){
			//console.log(this.order.ingredients.map(item=>item["ingredient_"+ this.lang]).join(", "));
			//do the thing in here
		}
	}
}
</script>
<style scoped>
#ingred{
	font-weight: bold;

}

</style>
