<template>
  <div class="pagemenu">
    <div class="menu exitshopping">
    <button class="buttonmenu" v-on:click="showCart" id="shop-button">
      <i class="fa fa-shopping-cart fa-1x"></i>
    </button>

    <div class="updateCart" id="new-burger" v-show="showNumber()">
      <div class="number-style">{{burgerAmount}}</div>
    </div>

    <button class="buttonmenu" id="order-button" v-show="showNumber()" v-on:click="placeOrder()">
      <b>{{uiLabels.placeOrder}}: </b> <span>{{totalPrice}}:-</span>
    </button>
    <button v-on:click="menuPush(4)" class="buttonmenu" id="cancel">
      <i class="fa fa-times fa-1x"></i>
    </button>
  </div>
    <div class="menu buttons">
    <label>
      <button class="button" id="buttonburg" v-on:click="menuPush(1)"> {{ uiLabels.hamburger }}</button>
    </label>
    <label>
      <button class="button" id="buttonside" v-on:click="menuPush(2)"> {{ uiLabels.sides }}</button>
    </label>
    <label>
      <button class="button" id="buttonbev" v-on:click="menuPush(3)"> {{ uiLabels.beverage }}</button>
    </label>
  </div>
  </div>
</template>
<script>
export default {
  name: 'MenuPage',
  props: {
    uiLabels: Object,
    lang: String,
    step: Number,
    burgerAmount: Number,
    totalPrice: Number
  },
  data: function (){
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

.pagemenu {
  height: 90vh;
  display: grid;
  justify-content: center;
  grid-template-rows: 20% 80%);
}

.menu {
  padding: 0 0 0;
}

.exitshopping {
  grid-column: 1;
  grid-row: 1;
}

.buttons {
  grid-column: 1;
  grid-row: 2;
  margin-top: 0;
}

.button {
  border-radius: 0.7em;
  border: 1px solid #000;
  width: 10em;
  height: 2em;
  color: black;
  /*padding: 15px 32px;*/
  text-align: center;
  text-decoration: none;
  font-size: 2em;
  font-family: inherit;
  display: block;
  /*font-size: 16px;*/
  margin: 0.1em;
}

.buttonmenu {
  width: 2em;
  height: 2em;
  font-size: 2em;
  border-radius: 0.4em;
  border: 1px solid #000;
  margin: 0.2em;
  float: right;
  cursor: pointer;
}

@media screen and (min-width: 600px){
  .buttonmenu{
    font-size: 4em;
  }
  .button{
    font-size: 3.5em;
  }
}

.updateCart {
  position: absolute;
}

#shop-button {
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

#buttonburg {
  background-color: #ffab40ff; /* Green */
}

#buttonside {
  background-color: #93c47dff; /* Green */
}

#buttonbev {
  background-color: #c27ba0ff; /* Green */
}

#cancel {
  float: left;
  font-weight: normal;
}

#order-button {
  background: #93c47dff;
  width: 14em;
}

</style>
