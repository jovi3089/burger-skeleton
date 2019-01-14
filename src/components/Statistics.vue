<template>
  <div class="root">
    <div class="wrapper">
      <div class="header">
        <p id="maintitle">Statistics</p>
      </div>
      <div class="title A">
        <p class="headerCategory">{{uiLabels.burgerBread}}</p>
      </div>
        <div class="list a">
          <div
          v-for="(number, key) in breads"
          >
            <p>{{findProduct(key)}}: {{number}}</p>
          </div>
        </div>
        <div class="title B">
          <p class="headerCategory">{{uiLabels.burgerPatty}}</p>
        </div>
        <div class="list b">
          <div>
            <p>{{ingredients}}</p>
          </div>
        </div>
        <div class="title C">
          <p class="headerCategory">{{uiLabels.burgerTopping}}</p>
        </div>
        <div class="list c">
          <div>
            <p>produkt</p>
          </div>
        </div>
        <div class="title D">
          <p class="headerCategory">{{uiLabels.burgerSauce}}</p>
        </div>
        <div class="list d">
          <div>
            <p>hellu</p>
          </div>
        </div>
        <div class="title E">
          <p class="headerCategory">{{uiLabels.sideOptions}}</p>
        </div>
        <div class="list e">
          <div>
            <p>hellu</p>
          </div>
        </div>
        <div class="title F">
          <p class="headerCategory">{{uiLabels.statisticsCombo}}</p>
        </div>
        <div class="list f">
          <div>
            <p>produkt</p>
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
  name: 'Statistics',
  props: {
    orders: Object,
    ingredients: Array,
    uiLabels: Object,
    lang: String
  },

  data: function () {
    //keys represent ingredients_id, value is number represented in orders
    return {
      pattys: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0},
      toppings: {11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0,
                 21: 0, 22: 0, 23: 0, 24: 0, 25: 0, 26: 0, 27: 0, 28: 0, 29: 0, 30: 0,
                 31: 0, 32: 0, 33: 0, 34: 0},
      sauces: {35: 0, 36: 0, 37: 0, 38: 0, 39: 0,40: 0, 41: 0, 42: 0, 43: 0, 44: 0,
               45: 0, 46: 0, 47: 0, 48: 0, 49: 0},
      breads: {50: 0, 51: 0, 52: 0, 53: 0},
      sides: {54: 0, 55: 0, 56: 0},
      combos: {}
    }
  },

  methods:{
    findProduct: function (id) {
      console.log("id: ");
      console.log(id);
      console.log("this.ingredients.length: ");
      console.log(this.ingredients.length);
      for (var i = 0; i < this.ingredients.length; i++) {
        console.log("this.ingredients[i].ingredient_id: ");
        console.log(this.ingredients[i].ingredient_id);
        if (parseInt(this.ingredients[i].ingredient_id) === parseInt(id)) {
          var ans = this.ingredients[i].ingredient_en;
          return ans;
        }
      }
    }
  }
}
</script>

<style>
.wrapper {
  /*width: 100vw; vw 100% of the page width is covered by saldo*/
  /*height: 100vh; vw 100% of the page height is covered by saldo*/
  height: 92vh;
  width: 100vw;
  display: grid;
  /*justify-content: flex-start; /*The items start at top*/
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 10% 5% 38.5% 5% 38.5%;
  font-size: 12pt;
  grid-row-gap: 0.3em;
  grid-column-gap: .5em;
  padding: 0 0 0 0;
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

.headerCategory {
    font-size: 2em;
    font-weight: bold;
    margin: 0;
}

.title{
  padding-left: 0.5em;
}

.A{
  background-color: #D2691E;
  grid-column: 1;
  grid-row: 2;
}
.B{
  background-color: pink;
  grid-column: 2;
  grid-row: 2;
}
.C{
  background-color: orange;
  grid-column: 3;
  grid-row: 2;
}
.D{
  background-color: yellow;
  grid-column: 1;
  grid-row: 4;
}
.E{
  background-color: lightblue;
  grid-column: 2;
  grid-row: 4;
}
.F{
  background-color: green;
  grid-column: 3;
  grid-row: 4;
}

.list {
  overflow-y: scroll;
  padding-left: 2em;
}

.a {
  background-color: #D2691E;
  grid-column: 1;
  grid-row: 3;
}
.b {
  background-color: pink;
  grid-column: 2;
  grid-row: 3;
}
.c {
  background-color: orange;
  grid-column: 3;
  grid-row: 3;
}
.d {
  background-color: yellow;
  grid-column: 1;
  grid-row: 5;
}
.e {
  background-color: lightblue;
  grid-column: 2;
  grid-row: 5;
}
.f {
  background-color: green;
  grid-column: 3;
  grid-row: 5;
}
#maintitle {
    display: block;
    text-transform: uppercase;
    padding-left: 1em;
    font-size: 3vw;
    font-style: italic;
    font-weight: bold;
  }

</style>
