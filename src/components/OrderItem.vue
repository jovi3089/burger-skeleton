<template>

	<div v-on:click="changeIngredients()" class="bubble">
 			<span id="ingred">{{uiLabels.ingredients}}:</span> {{ order.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }}
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
