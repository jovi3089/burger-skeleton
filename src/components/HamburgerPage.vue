<template>
  <div class="hamburgerpage">
    <div class="hamburger top">
    <button class="updateCart" v-on:click="showCart" id="shop-button">
      <i class="fa fa-shopping-cart" style="font-size: 25px;"></i>
    </button>
    <div class="updateCart" id="new-burger" v-show="showNumber()"><div class="number-style">{{burgerAmount}}</div></div>
    <button class="buttonmenu" id="order-button" v-show="showNumber()" v-on:click="placeOrder()">
      <b>{{uiLabels.placeOrder}}: </b> <span>{{totalPrice}}:-</span>
    </button>
    <button v-on:click="menuPush(4)" class="buttonmenu" id="cancel">
      <i class="fa fa-arrow-left" style="font-size: 20px;"></i>
    </button>
  </div>
  <div class="hamburger bottom">
    <label>
      <button class="button" id="buttondesign" v-on:click="menuPush(1)"> {{ uiLabels.designBurger }}</button>
    </label>
    <label>
      <button class="button" id="buttonpopular" v-on:click="menuPush(2)"> {{ uiLabels.popularBurger }}</button>
    </label>
    <label>
      <button class="button" id="buttonrandom" v-on:click="menuPush(3)"> {{ uiLabels.randomBurger }}</button>
    </label>
  </div>
  </div>
</template>
<script>
export default {
  name: 'HamburgerPage',
  props: {
    uiLabels: Object,
    lang: String,
    step: Number,
    burgerAmount: Number,
    totalPrice: Number
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
        case 1: this.$emit('designBurger')
        break;
        case 2: this.$emit('side')
        break;
        case 3: this.$emit('beverage')
        break;
        case 4: this.$emit('menuPage')
        break;
      }
    },
    placeOrder: function(){
      this.$emit('placeOrder');
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
  height: 90vh;
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(2, 1fr);
}

.burger {
  padding: 0 0 0;
}

.top {
  grid-column: 1;
  grid-row: 1;
}

.bottom {
  grid-column: 1;
  grid-row: 2;
  margin-top: 50vh;
}

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

.buttonmenu {
  width: 5em;
  height: 5em;
  border-radius: 1em;
  border: 1px solid #000;
  margin: 0.2em;
  cursor: pointer;
}

.updateCart {
  position: absolute;
}

#shop-button {
  width: 5em;
  height: 5em;
  border-radius: 1em;
  border: 1px solid #000;
  margin: 0.2em;
  cursor: pointer;
  float: right;
  position: relative;
  z-index: 1;
}

#new-burger {
  z-index: 1;
  margin-left: 13.5em;
  margin-top: 2.6em;
  border: 1px solid #000;
  border-radius: 50%;
  background-color: #ea9999ff;
  width: 1.2em;
  height: 1.2em;
  text-align: center;
}

.number-style {
  color: black;
  font-size: 12pt;
}

#buttondesign {
  background-color: #ffab40ff; /* Green */
}

#buttonpopular {
  background-color: #f9cb9cff; /* Green */
}

#buttonrandom {
  background-color: #fce5cdff; /* Green */
}

#cancel {
  float: left;
}

#order-button {
  background: #93c47dff;
  width: 14em;
}

</style>
