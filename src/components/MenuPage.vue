<template>
  <div>
    <label>
      <button class="button" id="buttonburg" v-on:click="menuPush(1)"> {{ uiLabels.hamburger }}</button>
    </label>
    <label>
      <button class="button" id="buttonside" v-on:click="menuPush(2)"> {{ uiLabels.sides }}</button>
    </label>
    <label>
      <button class="button" id="buttonbev" v-on:click="menuPush(3)"> {{ uiLabels.beverage }}</button>
    </label>
    <button v-on:click="menuPush(4)">Cancel order</button>
    <button class="buttonmenu" v-on:click="showCart" id="shoppingCart">
      <i class="fa fa-shopping-cart" style="font-size:18px;"></i>
    </button>
  </div>
</template>
<script>
export default {
  name: 'MenuPage',
  props: {
    uiLabels: Object,
    lang: String,
    step: Number
  },
  data: function () {
    return {
      hamburger: "Hamburgare",
      sides: "Tillbehör",
      beverage: "Dryck",
      nextStep: ''
    };
  },
  methods: {
    menuPush: function (menuChoice) {
      switch (menuChoice) {
        case 1: this.$emit('burger')
        break;
        case 2: this.$emit('side')
        break;
        case 3: this.$emit('beverage')
        break;
        case 4: this.$emit('newPageZero')
        break;
      }
    },
    showCart: function(){
      this.$emit('cartClick')
    }
  }
}
</script>
<style scoped>

.button {
  border-radius: 2em;
  border: 1px solid #000;
  width: 25em;
  height: 5em;
  color: black;
  /*padding: 15px 32px;*/
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  display: block;
  /*font-size: 16px;*/
  margin: auto auto;
}

#buttonburg {
    background-color: #ffab40ff; /* Green */
}

#buttonside {
    background-color: #93c47dff; /* Green */
}

#buttonbev {
    background-color: #c27ba0ff; /* Green */
}
</style>
