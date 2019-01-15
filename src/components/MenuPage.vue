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
  border: 1px solid #c9beb6ff;
  background-image: -webkit-linear-gradient(top, #efe2d9, #c9beb6ff);/*#E6E6E6, #CCCCCC*/
  background-image: -moz-linear-gradient(top, #efe2d9, #c9beb6ff);
  background-image: -ms-linear-gradient(top, #efe2d9, #c9beb6ff);
  background-image: -o-linear-gradient(top, #efe2d9, #c9beb6ff);
  background-image: linear-gradient(to bottom, #efe2d9, #c9beb6ff);
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
  background-color: #93c47dff; /* Green */
  border:1px solid #9e665a; /*#93c47dff;/*#ffad41;*/
  background-image: -webkit-linear-gradient(top, #d98c7bff, #b93822); /*#6aa84fff #b6d7a8ff*/
  background-image: -moz-linear-gradient(top, #d98c7bff,#b93822);
  background-image: -ms-linear-gradient(top, #d98c7bff, #b93822);
  background-image: -o-linear-gradient(top, #d98c7bff, #b93822);
  background-image: linear-gradient(to bottom, #d98c7bff, #b93822);
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
  border:1px solid #6aa84fff;/*#ffad41;*/
  background-image: -webkit-linear-gradient(top, #addf90ff, #6aa84fff);
  background-image: -moz-linear-gradient(top, #addf90ff, #6aa84fff);
  background-image: -ms-linear-gradient(top, #addf90ff, #6aa84fff);
  background-image: -o-linear-gradient(top, #addf90ff, #6aa84fff);
  background-image: linear-gradient(to bottom, #addf90ff, #6aa84fff);
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
  border:1px solid #b49128;
  background-image: -webkit-linear-gradient(top, #eabc33ff, #a68524ff); /*#ffc579 #fb9d23*/
  background-image: -moz-linear-gradient(top, #eabc33ff, #a68524ff);
  background-image: -ms-linear-gradient(top, #eabc33ff, #a68524ff);
  background-image: -o-linear-gradient(top, #eabc33ff, #a68524ff);
  background-image: linear-gradient(to bottom, #eabc33ff, #a68524ff);
}

#buttonside {
  background-color: #c27ba0ff; /* Green */
  border:1px solid #bd9260ff;/*#c27ba0ff;/*#ffad41;*/
  background-image: -webkit-linear-gradient(top, #f8c07eff, #bd9260ff); /*#d5a6bdff, #a64d79ff*/
  background-image: -moz-linear-gradient(top, #f8c07eff, #bd9260ff);
  background-image: -ms-linear-gradient(top, #f8c07eff, #bd9260ff);
  background-image: -o-linear-gradient(top, #f8c07eff, #bd9260ff);
  background-image: linear-gradient(to bottom, #f8c07eff, #bd9260ff); /* ingrdient #abe2ecff, #82abb3ff*/
}

#buttonbev {
  background-color: #93c47dff; /* Green */
  border:1px solid #9e665a; /*#93c47dff;/*#ffad41;*/
  background-image: -webkit-linear-gradient(top, #d98c7bff, #b93822); /*#6aa84fff #b6d7a8ff*/
  background-image: -moz-linear-gradient(top, #d98c7bff,#b93822);
  background-image: -ms-linear-gradient(top, #d98c7bff, #b93822);
  background-image: -o-linear-gradient(top, #d98c7bff, #b93822);
  background-image: linear-gradient(to bottom, #d98c7bff, #b93822);

}

</style>
