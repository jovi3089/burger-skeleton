<template>
  <div class = "popularBurgerPage">
    <p id = "title">{{uiLabels.ourMostPopularBurgers}}<p/>
    <div class = "container">
      <div class="numberOfPopularity">
        #1
      </div>
      <p class = "displayPopularBurger first">Most popular burger:<br> {{decodeNicely(burgerCombos[1])}}<p/>
      <button class = "burgerButton firstButton"
      v-on:click="$emit('firstChoice')"
      >
      select/order:<br> {{decodeNicely(burgerCombos[1])}}
      </button>
      <p class = "numberOfPopularity two">(#2)<p/>
      <p class = "displayPopularBurger second">(second most popular burger):<br> {{decodeNicely(burgerCombos[2])}}<p/>
      <button class = "burgerButton secondButton"
      v-on:click="$emit('secondChoice')"
      >select/order:<br> {{decodeNicely(burgerCombos[2])}}</button>
      <p class = "numberOfPopularity three">(#3)<p/>
      <p class = "displayPopularBurger third">(third most popular burger):<br> {{decodeNicely(burgerCombos[3])}}<p/>
      <button class = "burgerButton thirdButton"
      v-on:click="$emit('thirdChoice')"
      >select/order:<br> {{decodeNicely(burgerCombos[3])}}</button>
    </div>
    <button v-on:click="$emit('menuPage')" class="buttonmenu" id="back">
      <i class="fa fa-arrow-left" style="font-size: 20px;"></i>
    </button>
    <p>(footer här?)<p/>

  </div>
</template>

<script>
export default {
  name: 'StartingPage',
  props: {
    uiLabels: Object,
    lang: String,
    burgerCombos: Object,
    ingredients: Array,
    step: Number,
  },
  watch: {
    burgerCombos: function (){
      //console.log("popBurPage: wow burgerCombos förändrades!!!!")
      //när burgerCombos förändras.
    },
  },
  methods: {
    decodeNicely(ingredId){
      var decodedUgly = this.decoder(ingredId);
      return decodedUgly.join(",");
    },
    decoder: function(ingredientId){
      if(ingredientId !== 0){
        var ingredientNames = [];
        var idSep = this.idSeparate(ingredientId)
        //console.log("decoder() idSep: " + idSep);
        for(let i = 0; i<idSep.length; i++){
          let name = this.getIngredient(idSep[i])
          //console.log("~~~~~~~~~~varv i decoder~~~~~~~~~~~~")
          ingredientNames.push(name);
        }
        //console.log("ingredienserna är: "+ingredientNames.join(", "))
        return ingredientNames;
      }
    },
    getIngredient: function(ingredientCode){
      let id = parseInt(ingredientCode);
      let ing = this.ingredients;
      //console.log(ing);
      //console.log("getIngredient() parseInt(ingredCode): " + id);
      for(let i = 0; i<ing.length; i++){
          if(id === ing[i].ingredient_id){
            //console.log("yey "+ ing[i].ingredient_en)
            return(ing[i].ingredient_en)
          }
        }
    },
    idSeparate: function(aThing){
      //var idString = "534501"; // 53 45 01
      var idString = aThing+"";
      var idArray = idString.split("");
      var slicedArray = [];
      var joinedIdArray = [];
      var result = [];
      for (let i = 0; i < idString.length; i = i +2) {
        slicedArray.push(idArray.slice(0+i, 2+i));
        joinedIdArray.push(slicedArray[i/2].join());
        result[i/2] = joinedIdArray[i/2].replace(/,/g,"");
      }
      return result;
    }
  }
}
</script>

<style scoped>
.buttonmenu {
  width: 5em;
  height: 5em;
  border-radius: 1em;
  border: 1px solid #000;
  margin: 0.2em;
  float: right;
  cursor: pointer;
}

#title{
  font-size: 2em;
}
.container{
  display: grid;
  grid-template-rows: 5% 20% 5% 20% 5% 20%;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 0;
}
.numberOfPopularity{
  grid-column: 1;
  display: flex;
  border-radius: 15px;
}
.one{
  grid-row: 1;
}
.two{
  grid-row: 3;
}
.three{
  grid-row: 5;
}
.displayPopularBurger{
  grid-column: 1;
  display: flex;
  border-radius: 15px;
}
.first{
  grid-row: 2;
}
.second{
  grid-row: 4;
}
.third{
  grid-row: 6;
}
.burgerButton{
  grid-column: 2;
  display: flex;
  border-radius: 15px;
}
.firstButton{
  grid-row: 2; /*placeringen ändras inte när värdet ändras på dessa. Vet ej varför /Erik*/
}
.secondButton{
  grid-row: 4;
}
.thirdButton{
  grid-row: 6;
}
</style>
