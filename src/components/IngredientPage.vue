<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div v-show="category===4">
      <button class="buttonmenu" v-bind:class="clickedOn1" v-on:click="changeCategory(4)">{{ uiLabels.burgerBread }}</button>
      <button class="buttonmenu" v-bind:class="clickedOn2" v-on:click="changeCategory(1)">{{ uiLabels.burgerPatty }}</button>
      <button class="buttonmenu" v-bind:class="clickedOn3" v-on:click="changeCategory(2)">{{ uiLabels.burgerTopping }}</button>
      <button class="buttonmenu" v-bind:class="clickedOn4" v-on:click="changeCategory(3)">{{ uiLabels.burgerSauce }}</button>
      <button class="buttonmenu" v-on:click="showCart" id="shoppingCart">
        <i class="fa fa-shopping-cart" style="font-size:18px;"></i>
      </button>
    </div>
    <!--<div v-show="category===5">
    </div>-->
    <div class="ingredients-grid">
      <Ingredient
        ref="ingredient"
        v-for="item in ingredients"
        v-if="item.category===category"
        v-on:increment="incrementOrder(item)"
        v-on:decrease="decreaseOrder(item)"
        :item="item"
        :lang="lang"
        :key="item.ingredient_id">
      </Ingredient>
    </div>
  </div>

</template>
<script>

import Ingredient from '@/components/Ingredient.vue'

export default {
  name: 'IngredientPage',
  components: {
    Ingredient
  },
  props: {
    ingredients: Array,
    lang: String,
    uiLabels: Object,
    category: Number
  },
  data: function () {
    return {
      clickedOn1: "orangeBorder",
      clickedOn2: '',
      clickedOn3: '',
      clickedOn4: '',
      clickedOn5: "greenBorder"
    };
  },
  methods: {
    incrementOrder: function (ingrItem) {
      this.$emit('addtoorder', ingrItem);
    },
    decreaseOrder: function (ingrItem) {
      this.$emit('deletefromorder', ingrItem);
    },
    changeCategory: function (toCategory) {
      this.resetCategory();
      switch (toCategory) {
        case 4: this.clickedOn1 = "orangeBorder"
        this.burgerCategory = 4
        break;
        case 1: this.clickedOn2 = "orangeBorder"
        this.burgerCategory = 1
        break;
        case 2: this.clickedOn3 = "orangeBorder"
        this.burgerCategory = 2
        break;
        case 3: this.clickedOn4 = "orangeBorder"
        this.burgerCategory = 3
        break;
        case 5: this.clickedOn5 = "greenBorder"
        this.sideCategory = 5
        break;
      }
    },
    resetCategory: function () {
      this.clickedOn1 = '';
      this.clickedOn2 = '';
      this.clickedOn3 = '';
      this.clickedOn4 = '';
      this.clickedOn5 = '';
    }
  }
}
</script>

<style scoped>

.ingredients-grid {
 display: grid;
 grid-template-columns: repeat(auto-fit, 7em);
 grid-gap: 1em;
}

.ingredients-scroll {
  overflow-y: scroll;
  padding-left: 2em;
}

.buttonmenu {
  width: 5em;
  height: 5em;
  border-radius: 1em;
  border: 1px solid #000;
  margin: 0.5em;
  cursor: pointer;
}

.buttonmenu:hover {
  background-color: #d0e0e3ff;
}

.orangeBorder {
  border: 2px solid #ffab40;
}

.greenBorder {
  border: 2px solid #93c47dff;
}

.categoryText {
  font-size: 2.5vw;
  font-style: italic;
  font-weight: bold;
}

</style>
