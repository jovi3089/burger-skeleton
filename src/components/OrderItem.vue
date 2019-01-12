<template>

	<div v-on:click="changeIngredients()" class="bubble">
			<!--All the ingredients should go here-->
 			<span id="ingred">{{uiLabels.ingredients}}:</span>
			<!-- {{order.ingredients}}
			<span>hej</span>
			 -->
			<li
			v-for="index in order.ingredients.length"
			:key="index">
			{{ getOrder(index)}}
			</li>
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
		getOrder: function(ind) {
			var numOfItems = this.order.ingredients[ind-1].length;
			console.log(numOfItems);
			var order = this.order.ingredients[ind-1];
			var ans = "";
			for (var i = 0; i < numOfItems; i++) {
				if (ans===""){
					switch(this.lang){
						case "en":
							ans = ans + order[i].ingredient_en
						break;
						case "sv":
							ans = ans + order[i].ingredient_sv
						break;
					}
				}
				else{
					switch(this.lang){
						case "en":
							ans = ans + ", " + order[i].ingredient_en
						break;
						case "sv":
							ans = ans + ", " + order[i].ingredient_sv
						break;
					}
				}
			}
			return ans;
		},
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
