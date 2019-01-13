<template>

	<div v-on:click="changeIngredients()" class="bubble">
			<!--All the ingredients should go here-->
			<!-- {{order.ingredients}}
			<span>hej</span>
			 -->
			<ol id="ul"
				<li class="container"
					v-for="index in order.ingredients.length"
					:key="index">
					<span id="anOrder">{{ getOrder(index) }}</span>
				</li>
			</ol>
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
#ul{
		margin: auto auto auto auto;
}

li {
  display: list-item;
  list-style-position: inside;
}

#anOrder{
	  margin: auto auto auto auto;
		font-size: large;
    color: #fff;
    text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
}

.container{
  display: block;
  width: 100%;
  height: auto;
  border: 4px solid;
  border-color: Black;
  border-radius: 12px;
}

</style>
