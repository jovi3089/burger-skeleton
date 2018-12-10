<template>
  <div id="saldo">
    <div id="tempone"
    v-for="item in ingred"
    v-if="item.category===1"
    :key="item.ingredient_id"
    >
      <br>
      {{item["ingredient_"+ lang]}}: {{item.stock}} pcs
    </br>
    </div>
    <div id="temptwo"
    v-for="item in ingred"
    v-if="item.category===2"
    :key="item.ingredient_id"
    >
      {{item["ingredient_"+ lang]}}: {{item.stock}} pcs

    </div>
    <div id="tempthree"
    v-for="item in ingred"
    v-if="item.category===3"
    :key="item.ingredient_id"
    >
      {{item["ingredient_"+ lang]}}: {{item.stock}} pcs
    </div>
    <div id="tempfour"
    v-for="item in ingred"
    v-if="item.category===4"
    :key="item.ingredient_id"
    >
      {{item["ingredient_"+ lang]}}: {{item.stock}} pcs
    </div>
    <div id="tempfive"
    v-for="item in ingred"
    v-if="item.category===5"
    :key="item.ingredient_id"
    >
      {{item["ingredient_"+ lang]}}: {{item.stock}} pcs
    </div>
    <div id="tempsix"
    v-for="item in ingred"
    v-if="item.category===6"
    :key="item.ingredient_id"
    >
      {{item["ingredient_"+ lang]}}: {{item.stock}} pcs
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

<style lang="css">
#saldo {
  width: 100vw; /*vw 100% of the page width is covered by saldo*/
  height: 100vh; /*vw 100% of the page height is covered by saldo*/
  display: grid;
  justify-content: flex-start; /*The items start at top*/
  grid-template-columns: 33% 33% 33%;
  font-size: 12pt;
  grid-row-gap: 1em;
  grid-column-gap: .5em;
}
#tempone {
  display: grid;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  /*grid-template-columns: repeat(1, minmax(1em 1fr));*/
}
#temptwo {
  display: grid;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  /*grid-template-columns: repeat(1, minmax(1em 1fr));*/
}
#tempthree {
  display: grid;
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-template-columns: repeat(1, minmax(1em 1fr));
}
#tempfour {
  display: grid;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  /*grid-template-columns: repeat(1, minmax(1em 1fr));*/
}
#tempfive {
  display: grid;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-template-columns: repeat(1, minmax(1em 1fr));
}
#tempsix {
  display: grid;
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 2;
  /*grid-template-columns: repeat(1, minmax(1em 1fr));*/
}

</style>
