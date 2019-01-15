<template>
  <div>
    <div class="pagemenu">
    <div class="menu seeshopping">
    <button class="buttonmenu" v-on:click="showCart" id="shop-button">
      <i class="fa fa-shopping-cart fa-1x"></i>
      <transition name="flash-the-number">
        <div v-show="doTheThing()">
          <div class="updateCart" id="new-burger" v-show="showNumber()">
            <div class="number-style">{{burgerAmount}}</div>
          </div>
        </div>
      </transition>
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
      <i class="fa fa-times fa-1x"></i>
    </button>
  </div>
</div>
  <div>
    <label>
      <button class="button" id="buttonburg" v-on:click="menuPush(1)">
        <div class="button-font">{{ uiLabels.hamburger }}</div>
      </button>
    </label>
    <label>
      <button class="button" id="buttonside" v-on:click="menuPush(2)">
        <div class="button-font">{{ uiLabels.sides }}</div>
      </button>
    </label>
    <label>
      <button class="button" id="buttonbev" v-on:click="menuPush(3)">
        <div class="button-font">{{ uiLabels.beverage }}</div>
      </button>
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
    },
    doTheThing: function (){
      return this.burgerAmount > 0;
    }
  }
}
</script>
<style scoped>

.pagemenu {
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

/*.buttons {
  grid-column: 1;
  grid-row: 2;
  margin-top: 0;
}*/

.button {
  border-radius: 0.7em;
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
  float: right;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

#new-burger {
  z-index: 1;
  border-radius: 50%;
  width: 0.7em;
  height: 0.7em;
  text-align: center;
  left: -0.3em;
  border:1px solid #ea9999ff;/*#ffad41;*/
  background-image: -webkit-linear-gradient(top, #ea9999ff, #e06666ff);
  background-image: -moz-linear-gradient(top, #ea9999ff, #e06666ff);
  background-image: -ms-linear-gradient(top, #ea9999ff, #e06666ff);
  background-image: -o-linear-gradient(top, #ea9999ff, #e06666ff);
  background-image: linear-gradient(to bottom, #ea9999ff, #e06666ff);
}

.number-style {
  color: black;
  font-size: 0.5em;
}

#cancel {
  float: left;
  font-weight: normal;
}

#order-button {
  background-color: #93c47dff; /* Green */
  border:1px solid #93c47dff;/*#ffad41;*/
  background-image: -webkit-linear-gradient(top, #b6d7a8ff, #6aa84fff);
  background-image: -moz-linear-gradient(top, #b6d7a8ff, #6aa84fff);
  background-image: -ms-linear-gradient(top, #b6d7a8ff, #6aa84fff);
  background-image: -o-linear-gradient(top, #b6d7a8ff, #6aa84fff);
  background-image: linear-gradient(to bottom, #b6d7a8ff, #6aa84fff);
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

.flash-the-number-enter-active{
  transition: all 1s;
}

.flash-the-number-leave-active{
  transition: all 1s;
}

.flash-the-number-enter, .flash-the-number-leave-to{
  transform: scale(10);
}

#buttonburg {
  border:1px solid #ffab40ff;
  background-image: -webkit-linear-gradient(top, #ffc579, #fb9d23);
  background-image: -moz-linear-gradient(top, #ffc579, #fb9d23);
  background-image: -ms-linear-gradient(top, #ffc579, #fb9d23);
  background-image: -o-linear-gradient(top, #ffc579, #fb9d23);
  background-image: linear-gradient(to bottom, #ffc579, #fb9d23);
}

#buttonside {
  background-color: #93c47dff; /* Green */
  border:1px solid #93c47dff;/*#ffad41;*/
  background-image: -webkit-linear-gradient(top, #b6d7a8ff, #6aa84fff);
  background-image: -moz-linear-gradient(top, #b6d7a8ff, #6aa84fff);
  background-image: -ms-linear-gradient(top, #b6d7a8ff, #6aa84fff);
  background-image: -o-linear-gradient(top, #b6d7a8ff, #6aa84fff);
  background-image: linear-gradient(to bottom, #b6d7a8ff, #6aa84fff);
}

#buttonbev {
  background-color: #c27ba0ff; /* Green */
  border:1px solid #c27ba0ff;/*#ffad41;*/
  background-image: -webkit-linear-gradient(top, #d5a6bdff, #a64d79ff);
  background-image: -moz-linear-gradient(top, #d5a6bdff, #a64d79ff);
  background-image: -ms-linear-gradient(top, #d5a6bdff, #a64d79ff);
  background-image: -o-linear-gradient(top, #d5a6bdff, #a64d79ff);
  background-image: linear-gradient(to bottom, #d5a6bdff, #a64d79ff);
}

</style>
