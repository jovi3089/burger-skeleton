<template>
  <div>
    <div class="hamburgerpage">
    <div class="menu seeshopping">
    <button class="buttonmenu" v-on:click="showCart" id="shop-button">
      <i class="fa fa-shopping-cart fa-1x"></i>
      <div class="updateCart" id="new-burger" v-show="showNumber()">
        <div class="number-style">{{burgerAmount}}</div>
      </div>
    </button>
  </div>

  <div class="menu updateshopping">
    <button class="buttonmenu" id="invisible-button" v-show="!showNumber()">
    </button>

    <button class="buttonmenu" id="order-button" v-show="showNumber()" v-on:click="placeOrder()">
      <div class="place-text">{{uiLabels.placeOrder}}: {{totalPrice}}:-</div>
    </button>
  </div>

  <div class="menu exitshopping">
    <button v-on:click="menuPush(4)" class="buttonmenu" id="cancel">
      <i class="fa fa-arrow-left fa-1x"></i>
    </button>
  </div>
</div>
  <div>
    <label>
      <button class="button" id="buttondesign" v-on:click="menuPush(1)">
        <div class="button-font">{{ uiLabels.designBurger }}</div>
      </button>
    </label>
    <label>
      <button class="button" id="buttonpopular" v-on:click="menuPush(2)">
        <div class="button-font">{{ uiLabels.popularBurger }}</div>
      </button>
    </label>
    <label>
      <button class="button" id="buttonrandom" v-on:click="menuPush(3)">
        <div class="button-font">{{ uiLabels.randomBurger }}</div>
      </button>
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
        case 2: this.$emit('popularBurger')
        break;
        case 3: this.$emit('randomBurger')
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
  height: 40vh;
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
  border: 1px solid #cacaca;
  background-image: -webkit-linear-gradient(top, #E6E6E6, #CCCCCC);
  background-image: -moz-linear-gradient(top, #E6E6E6, #CCCCCC);
  background-image: -ms-linear-gradient(top, #E6E6E6, #CCCCCC);
  background-image: -o-linear-gradient(top, #E6E6E6, #CCCCCC);
  background-image: linear-gradient(to bottom, #E6E6E6, #CCCCCC);
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
  border: 1px solid #000;
  border-radius: 50%;
  background-color: #ea9999ff;
  width: 0.7em;
  height: 0.7em;
  text-align: center;
  left: -0.3em;
}

.number-style {
  color: black;
  font-size: 0.5em;
}

#buttondesign {
  background-color: #ffab40ff; /* Green */
  border:1px solid #ffab40ff;
  background-image: -webkit-linear-gradient(top, #ffc579, #fb9d23);
  background-image: -moz-linear-gradient(top, #ffc579, #fb9d23);
  background-image: -ms-linear-gradient(top, #ffc579, #fb9d23);
  background-image: -o-linear-gradient(top, #ffc579, #fb9d23);
  background-image: linear-gradient(to bottom, #ffc579, #fb9d23);
}

#buttonpopular {
  background-color: #f9cb9cff; /* Green */
  border:1px solid #f9cb9cff;
  background-image: -webkit-linear-gradient(top, #fce5cdff,#f6b26bff);
  background-image: -moz-linear-gradient(top, #fce5cdff, #f6b26bff);
  background-image: -ms-linear-gradient(top, #fce5cdff, #f6b26bff);
  background-image: -o-linear-gradient(top, #fce5cdff, #f6b26bff);
  background-image: linear-gradient(to bottom, #fce5cdff, #f6b26bff);
}

#buttonrandom {
  background-color: #fce5cdff; /* Green */
  border:1px solid #fce5cdff;
  background-image: -webkit-linear-gradient(top, #fff,#f9cb9cff);
  background-image: -moz-linear-gradient(top, #fff, #f9cb9cff);
  background-image: -ms-linear-gradient(top, #fff, #f9cb9cff);
  background-image: -o-linear-gradient(top, #fff, #f9cb9cff);
  background-image: linear-gradient(to bottom, #fff, #f9cb9cff);
}

#cancel {
  float: left;
}

#order-button {
  background: #93c47dff;
  width: 6em;
}

#invisible-button {
  background: none;
  width: 6em;
  border-style: none;
}

.place-text {
  font-weight: bold;
  font-size: 0.5em;
  font-family: inherit;
}

</style>
