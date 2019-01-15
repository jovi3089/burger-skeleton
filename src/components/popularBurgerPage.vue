<template>
  <div>
    <div class="hamburgerpage">
    <div class="menu seeshopping">
    <button class="buttonmenu" v-on:click="$emit('cartClick')" id="shop-button">
      <i class="fa fa-shopping-cart fa-1x"></i>
      <div class="updateCart" id="new-burger" v-show="showNumber()">
        <div class="number-style">{{burgerAmount}}</div>
      </div>
    </button>
  </div>
  <div class="menu updateshopping">
    <button class="buttonmenu" id="invisible-button">
    </button>
  </div>
  <div class="menu exitshopping">
    <button v-on:click="$emit('menuPage')" class="buttonmenu" id="cancel">
      <i class="fa fa-arrow-left fa-1x"></i>
    </button>
  </div>
</div>

<div class="popular-burgers">


  <div class="burgerpopular first">
    <div class="popular-symbol">#1</div>
    <div class="popular-text">
      {{decodeNicely(burgerCombos[1])}}
    </div>
  </div>


  <div class="burgerpopular second">
    <label>
      <button class="button" v-on:click="$emit('firstChoice')">
        <div class="button-font">Add #1 to cart</div>
      </button>
    </label>
  </div>


  <div class="burgerpopular third">
    <div class="popular-symbol">#2</div>
    <div class="popular-text">
      {{decodeNicely(burgerCombos[2])}}
    </div>
  </div>


  <div class="burgerpopular fourth">
    <label>
      <button class="button" v-on:click="$emit('secondChoice')">
        <div class="button-font">Add #2 to cart</div>
      </button>
    </label>
  </div>


  <div class="burgerpopular fifth">
    <div class="popular-symbol">#3</div>
    <div class="popular-text">
      {{decodeNicely(burgerCombos[3])}}
    </div>
  </div>


  <div class="burgerpopular sixth">
    <label>
      <button class="button" v-on:click="$emit('thirdChoice')">
        <div class="button-font">Add #3 to cart</div>
      </button>
    </label>
  </div>


</div>
</div>


    <!--<p id = "title">{{uiLabels.ourMostPopularBurgers}}<p/>
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
    <p>(footer här?)<p/>-->

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
    burgerAmount: Number
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
      return decodedUgly.join(" + ");
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
    idSeparate: function (aThing) {
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
    },
    showCart: function(){
      this.$emit('cartClick')
    },
    showNumber: function () {
      return this.burgerAmount !== 0;
    }
  }
}
</script>

<style scoped>

.hamburgerpage {
  height: 20vh;
  display: grid;
  justify-content: center;
  grid-template-columns: 3fr;
  grid-template-rows: 1fr;
}

.menu {
  margin-left: auto;
  margin-right: auto;
}

.exitshopping {
  grid-column: 1;
  grid-row: 1;
}

.updateshopping {
  grid-column: 2;
  grid-row: 1;
}

.seeshopping {
  grid-column: 3;
  grid-row: 1;
}

.button {
  border-radius: 0.7em;
  width: 10em;
  height: 2em;
  color: black;
  font-size: 2em;
  /*padding: 15px 32px;*/
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  display: block;
  /*font-size: 16px;*/
  margin: auto auto;
  background-color: #f9cb9cff; /* Green */
  border:1px solid #cda42cff;
  background-image: -webkit-linear-gradient(top, #f8c736ff,#cda42cff);
  background-image: -moz-linear-gradient(top, #f8c736ff, #cda42cff);
  background-image: -ms-linear-gradient(top, #f8c736ff, #cda42cff);
  background-image: -o-linear-gradient(top, #f8c736ff, #cda42cff);
  background-image: linear-gradient(to bottom, #f8c736ff, #cda42cff);
}

.button-font {
  font-size: 0.8em;
}

.buttonmenu {
  width: 2em;
  height: 2em;
  font-size: 2em;
  border-radius: 0.4em;
  margin: 0.1em;
  cursor: pointer;
  font-family: inherit;
  border: 1px solid #c9beb6ff;
  background-image: -webkit-linear-gradient(top, #efe2d9, #c9beb6ff);/*#E6E6E6, #CCCCCC*/
  background-image: -moz-linear-gradient(top, #efe2d9, #c9beb6ff);
  background-image: -ms-linear-gradient(top, #efe2d9, #c9beb6ff);
  background-image: -o-linear-gradient(top, #efe2d9, #c9beb6ff);
  background-image: linear-gradient(to bottom, #efe2d9, #c9beb6ff);
}

#shop-button {
  cursor: pointer;
  float: right;
  position: relative;
  z-index: 1;
}

#cancel {
  float: left;
}

.number-style {
  color: black;
  font-size: 0.5em;
}

.updateCart {
  position: absolute;
}

#new-burger {
  z-index: 1;
  border-radius: 50%;
  background-color: #ea9999ff;
  width: 0.7em;
  height: 0.7em;
  text-align: center;
  left: -0.3em; /* Green */
  background-color: #93c47dff; /* Green */
  border:1px solid #9e665a; /*#93c47dff;/*#ffad41;*/
  background-image: -webkit-linear-gradient(top, #d98c7bff, #b93822); /*#6aa84fff #b6d7a8ff*/
  background-image: -moz-linear-gradient(top, #d98c7bff,#b93822);
  background-image: -ms-linear-gradient(top, #d98c7bff, #b93822);
  background-image: -o-linear-gradient(top, #d98c7bff, #b93822);
  background-image: linear-gradient(to bottom, #d98c7bff, #b93822);
}

#invisible-button {
  background: none;
  width: 6em;
  border-style: none;
}

.popular-burgers {
  display: grid;
  height: 5em;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
}

.burgerpopular {
  justify-content: center;
}

.first {
  grid-column: 1;
  grid-row: 1;
  height: 5em;
  background-color: #BCB1A2;
  border: 1px solid #e5d7c5ff;
}

.second {
  grid-column: 1;
  grid-row: 2;
  margin-bottom: 1em;
}

.third {
  grid-column: 1;
  grid-row: 3;
  height: 5em;
  background-color: #BCB1A2;
  border: 1px solid #e5d7c5ff;
}

.fourth {
  grid-column: 1;
  grid-row: 4;
  margin-bottom: 1em;
}

.fifth {
  grid-column: 1;
  grid-row: 5;
  background-color: #BCB1A2;
  border: 1px solid #e5d7c5ff;
  height: 5em;
}

.sixth {
  grid-column: 1;
  grid-row: 6;
  margin-bottom: 1em;
}

.popular-text {
  color: black;
  font-size: 1em;
}

.popular-symbol {
  float: left;
  font-size: 2em;
  grid-column: 1;
}

@media screen and (min-width: 600px){
  .buttonmenu{
    font-size: 4em;
  }

  .button{
    font-size: 3.5em;
  }

  .popular-text {
    font-size: 2em;
  }

  .first {
    height: 8em;
  }

  .third {
    height: 8em;
  }

  .fifth {
    height: 8em;
  }
}

/*
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
  grid-row: 2; placeringen ändras inte när värdet ändras på dessa. Vet ej varför /Erik
}
.secondButton{
  grid-row: 4;
}
.thirdButton{
  grid-row: 6;
}*/
</style>
