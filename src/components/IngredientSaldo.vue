<template>
  <div class="root">
    <div class="wrapper">
      <div class="header">
        <p id="maintitle">Inventory Balance</p>
      </div>
      <div class="title A">
        <p class="headerCategory">Protein</p>
      </div>
        <div class="list a">
          <div
          v-for="item in descendStock"
          :key="item.ingredient_id"
          v-if="item[2]===1">
          <p>{{ item[0] }}: {{item[1]}} pieces</p>
          </div>

        </div>
        <div class="title B">
          <p class="headerCategory">Toppings</p>
        </div>
        <div class="list b">
          <div
          v-for="item in descendStock"
          :key="item.ingredient_id"
          v-if="item[2]===2">
          <p>{{ item[0] }}: {{item[1]}} pieces</p>
          </div>
        </div>
        <div class="title C">
          <p class="headerCategory">Sauce</p>
        </div>
        <div class="list c">
          <div
          v-for="item in descendStock"
          :key="item.ingredient_id"
          v-if="item[2]===3">
          <p>{{ item[0] }}: {{item[1]}} pieces</p>
          </div>
        </div>
        <div class="title D">
          <p class="headerCategory">Bread</p>
        </div>
        <div class="list d">
          <div
          v-for="item in descendStock"
          :key="item.ingredient_id"
          v-if="item[2]===4">
          <p>{{ item[0] }}: {{item[1]}} pieces</p>
          </div>
        </div>
        <div class="title E">
          <p class="headerCategory">Side orders</p>
        </div>
        <div class="list e">
          <div
          v-for="item in descendStock"
          :key="item.ingredient_id"
          v-if="item[2]===5">
          <p>{{ item[0] }}: {{item[1]}} pieces</p>
          </div>
        </div>
        <div class="title F">
          <p class="headerCategory">Drinks</p>
        </div>
        <div class="list f">
          <div
          v-for="item in descendStock"
          :key="item.ingredient_id"
          v-if="item[2]===6">
          <p>{{ item[0] }}: {{item[1]}} pieces</p>
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
      descendingArray: new Array(this.ingred.length),
    };
  },

  computed: {
  		descendStock: function() {
        for (var i=0; i < this.ingred.length; i++){
          this.descendingArray[i] = new Array(2);
          this.descendingArray[i][0] = this.ingred[i].ingredient_en;
          this.descendingArray[i][1] = this.ingred[i].stock;
          this.descendingArray[i][2] = this.ingred[i].category;
        }
    		function compare(a, b) {
      	return a[1] - b[1];
    		}
    		return this.descendingArray.sort(compare);
  		}
  },

  methods:{}
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
