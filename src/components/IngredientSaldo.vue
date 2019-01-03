<template>
  <div class="root">
    <div class="wrapper">
      <div class="header">
        <p class="title">Inventory Balance</p>
      </div>
        <div class="a">
          <p class="headerCategory">Protein</p>
          <div
          v-for="item in ingred"
          :key="item.ingredient_id"
          v-if="item.category===1">
            <p>{{item["ingredient_"+ lang]}}: {{item.stock}} pcs</p>
          </div>
        </div>
        <div class="b">
          <p class="headerCategory"> Toppings</p>
          <div
          v-for="item in ingred"
          :key="item.ingredient_id"
          v-if="item.category===2">
            <p>{{item["ingredient_"+ lang]}}: {{item.stock}} pcs</p>
          </div>
        </div>
        <div class="c">
          <p class="headerCategory">Sauce</p>
          <div
          v-for="item in ingred"
          :key="item.ingredient_id"
          v-if="item.category===3">
            <p>{{item["ingredient_"+ lang]}}: {{item.stock}} pcs</p>
          </div>
        </div>
        <div class="d">
          <p class="headerCategory">Bread</p>
          <div
          v-for="item in ingred"
          :key="item.ingredient_id"
          v-if="item.category===4">
            <p>{{item["ingredient_"+ lang]}}: {{item.stock}} pcs</p>
          </div>
        </div>
        <div class="e">
          <p class="headerCategory">Side orders</p>
          <div
          v-for="item in ingred"
          :key="item.ingredient_id"
          v-if="item.category===5">
            <p>{{item["ingredient_"+ lang]}}: {{item.stock}} pcs</p>
          </div>
        </div>
        <div class="f">
          <p class="headerCategory">Drinks</p>
          <div
          v-for="item in ingred"
          :key="item.ingredient_id"
          v-if="item.category===6">
            <p>{{item["ingredient_"+ lang]}}: {{item.stock}} pcs</p>
          <!--<div v-if="this.containsInfo===true">
            <p>descendCategories();</p></div>
              {{descArray}}-->
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngredientSaldo',
  props: {
    ingred: Object,
    lang: String
  },

  data: function () {
    return {
      containsInfo: false,
    };
  },

  methods:{
    descendCategories: function(){
      var descArray = [];
      for (var i=0; i < ingred.length; i++){
      /*  if (this.ingred[i].stock < this.ingred[i+1]){
          descArray = this.ingred[i]
        }
        else {
          descArray = this.ingred[i+1
        }*/
        descArray = this.ingred[i].stock;
      }
    },

    descendFunction: function(){
      var descendArray = [];
      for (var i=0; i < ingred.length; i++){
    

       this.ingred[i].stock;

      }
      descendArray.reverse();
    }

    /*isFilled: function(lang) {
      for(var prop in ingred) {
              if(obj.hasOwnProperty(prop))
                  return false;
      if (lang === "sv"){
        this.isSwedish = true;
        this.isEnglish = false;
      }
      return this.isSwedish;
    }
  }*/
}
}
</script>

<style>
.wrapper {
  /*width: 100vw; vw 100% of the page width is covered by saldo*/
  /*height: 100vh; vw 100% of the page height is covered by saldo*/
  height: 100vh;
  width: 100vw;
  display: grid;
  /*justify-content: flex-start; /*The items start at top*/
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 10% 45% 45%;
  font-size: 12pt;
  grid-row-gap: 1em;
  grid-column-gap: .5em;
  padding: 2% 2% 2% 2%;

}
.header {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 1;
    border: 5px solid grey;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .headerCategory{
    font-weight: bold;
    font-size: 1.5em;
  }


.a {
  background-color: #D2691E;
  grid-column: 1;
  grid-row: 2;
  overflow-y: scroll;

}
.b {
  background-color: pink;
  grid-column: 2;
  grid-row: 2;
  overflow-y: scroll;
}
.c {
  background-color: orange;
  grid-column: 3;
  grid-row: 2;
  overflow-y: scroll;
}
.d {
  background-color: yellow;
  grid-column: 1;
  grid-row: 3;
  overflow-y: scroll;
}
.e {
  background-color: blue;
  grid-column: 2;
  grid-row: 3;
  overflow-y: scroll;
}
.f {
  background-color: green;
  grid-column: 3;
  grid-row: 3;
  overflow-y: scroll;
}
.title {
    display: block;
    text-transform: uppercase;
    padding-left: 1em;
    font-size: 2vw;
    font-style: italic;
    font-weight: bold;
  }

</style>
