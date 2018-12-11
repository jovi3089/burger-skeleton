<template>
  <div class="root">
    <div class="wrapper">

        <div class="cat a"
        v-for="item in ingred"
        :key="item.ingredient_id"
        v-if="item.category===1"
        >
          hej
          <br>
        </div>
        <div class="cat b"
        v-for="item in ingred"
        v-if="item.category===2"
        :key="item.ingredient_id"
        >
          {{item["ingredient_"+ lang]}}: {{item.stock}} pcs
          <br>
        </div>
        <div class="cat c"
        v-for="item in ingred"
        v-if="item.category===3"
        :key="item.ingredient_id"
        >
          {{item["ingredient_"+ lang]}}: {{item.stock}} pcs
          <br>
        </div>
        <div class="cat d"
        v-for="item in ingred"
        v-if="item.category===4"
        :key="item.ingredient_id"
        >
          {{item["ingredient_"+ lang]}}: {{item.stock}} pcs
          <br>
        </div>
        <div class="cat e"
        v-for="item in ingred"
        v-if="item.category===5"
        :key="item.ingredient_id"
        >
          {{item["ingredient_"+ lang]}}: {{item.stock}} pcs
          <br>
        </div>
        <div class="cat f"
        v-for="item in ingred"
        v-if="item.category===6"
        :key="item.ingredient_id"
        >
          {{item["ingredient_"+ lang]}}: {{item.stock}} pcs
          <br>
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
  }
}
</script>

<style>
.wrapper {
  /*width: 100vw; vw 100% of the page width is covered by saldo*/
  /*height: 100vh; vw 100% of the page height is covered by saldo*/
  display: inline-grid;
  /*justify-content: flex-start; /*The items start at top*/
  grid-template-columns: 33% 33% 33%;
  font-size: 12pt;
  grid-row-gap: 1em;
  grid-column-gap: .5em;
}
.cat {
  border-radius: 1em;
  font-size: 100%;
  height: 300px;
  width: 200px;
  display: inline-grid;
  color: black;
}
.a {
  background-color: #D2691E;
  grid-column: 1;
  grid-row: 1;
}
.b {
  background-color: white;
  grid-column: 2;
  grid-row: 1;
}
.c {
  background-color: black;
  grid-column: 3;
  grid-row: 1;
}
.d {
  background-color: yellow;
  grid-column: 1;
  grid-row: 2;
}
.e {
  background-color: blue;
  grid-column: 2;
  grid-row: 2;
}
.f {
  background-color: green;
  grid-column: 3;
  grid-row: 2;
}


</style>
