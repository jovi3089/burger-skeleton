<template>
  <!--<div v-show="step===1"> </div>-->
  <!--skapa en component för när man designar burgaren,
    samt gör varje steg till komponenter, innehållande
    css i resp komponent-->

<!-- ===========================================================================================================================-->
<!-- ===========================================================================================================================-->

  <div id="ordering">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <transition name="slide-fade">
      <shoppingCart
        v-show="showCartState"
        v-on:closeCart="showCart()"
        v-on:placeOrder="placeOrder()"
        :lang="lang"
        :orders="shoppingCart"
        :totalPrice="totalPrice"
        :price="shoppingItemPrices"
        :ui-labels="uiLabels">
      </shoppingCart>
    </transition>

    <div v-show = "step===0">
      <button v-on:click="newPage(9)">Lol</button>
      <StartingPage
        :ui-labels="uiLabels"
        :lang="lang"
        @switchLang="switchLang"
        v-on:orderpage="newPage(1)"
        v-on:placeOrder="placeOrder()">
      </StartingPage>
    </div>

    <div v-show="step===1 && !showCartState">
      <MenuPage
      class="menupage"
      :ui-labels="uiLabels"
      :lang="lang"
      v-on:burger="newPage(2)"
      v-on:side="newPage(3)"
      v-on:beverage="newPage(4)"
      v-on:newPageZero="exitOrder()"
      v-on:cartClick="showCart()"
      v-on:placeOrder="placeOrder()"
      :totalPrice="totalPrice"
      :burgerAmount="burgerAmount">
      </MenuPage>

    </div>

    <div v-show="step===2 && !showCartState">
      <HamburgerPage
      class="menupage"
      :ui-labels="uiLabels"
      :lang="lang"
      v-on:menuPage="newPage(1)"
      v-on:designBurger="newPage(5)"
      v-on:popularBurger="newPage(6)"
      v-on:randomBurger="newPage(7)"
      v-on:cartClick="showCart()"
      v-on:placeOrder="placeOrder()"
      :totalPrice="totalPrice"
      :burgerAmount="burgerAmount">
      </HamburgerPage>
    </div>

    <div class="ordering-pages" v-show="!showCartState">
      <div v-show="step===3">
        <div class="category-buttons">
          <button class="buttonmenu exitbutton" id="exitbutton" v-on:click="cancelOrder(1)"><i class="fa fa-arrow-left" style="font-size: 25px;"></i></button>
          <button class="buttonmenu button-one" v-bind:class="clickedOn5" v-on:click="changeCategory(5)">{{ uiLabels.sideOptions }}</button>
        </div>
        <p class="categoryText" v-show="!showCartState" v-if="sideCategory===5">{{ uiLabels.chooseSide }}</p>
        <div class="ingredients-grid">
          <Ingredient
            ref="ingredient"
            v-for="item in ingredients"
            v-if="item.category===sideCategory"
            v-on:increment="addToOrder(item)"
            v-on:decrease="deleteFromOrder(item)"
            v-on:highlight="activateDesign()"
            :item="item"
            :lang="lang"
            :key="item.ingredient_id">
          </Ingredient>
        </div>
        <!--<button v-on:click="newPage(4)">Switch to page 4</button>-->
      </div>

      <div v-show="step===4">
        <div class="category-buttons">
          <button class="buttonmenu exitbutton" id="exitbutton" v-on:click="cancelOrder(1)"><i class="fa fa-arrow-left" style="font-size: 25px;"></i></button>
          <button class="buttonmenu button-one" v-bind:class="clickedOn6" v-on:click="changeCategory(6)">{{ uiLabels.beverageOptions }}</button>
        </div>
        <p class="categoryText" v-show="!showCartState" v-if="beverageCategory===6">{{ uiLabels.chooseBev }}</p>
        <div class="ingredients-grid">
            <Ingredient
              ref="ingredient"
              v-for="item in ingredients"
              v-if="item.category===beverageCategory"
              v-on:increment="addToOrder(item)"
              v-on:decrease="deleteFromOrder(item)"
              v-on:highlight="activateDesign()"
              :item="item"
              :lang="lang"
              :key="item.ingredient_id">
            </Ingredient>
        </div>
      </div>
                      <!--    lägg till styling på shoppingcart      -->
     <div v-show ="step===5">
       <div class="category-buttons">
        <button class="buttonmenu exitbutton" v-on:click="cancelOrder(2)"><i class="fa fa-arrow-left" style="font-size: 20px;"></i></button>
        <button class="buttonmenu button-one" v-bind:class="clickedOn1" v-on:click="changeCategory(4)">{{ uiLabels.burgerBread }}</button>
        <button class="buttonmenu button-two" v-bind:class="clickedOn2" v-on:click="changeCategory(1)">{{ uiLabels.burgerPatty }}</button>
        <button class="buttonmenu button-three" v-bind:class="clickedOn3" v-on:click="changeCategory(2)">{{ uiLabels.burgerTopping }}</button>
        <button class="buttonmenu button-four" v-bind:class="clickedOn4" v-on:click="changeCategory(3)">{{ uiLabels.burgerSauce }}</button>
      </div>
      <p class="categoryText" v-show="!showCartState" v-if="burgerCategory===1">{{ uiLabels.choosePatty }}</p>
      <p class="categoryText" v-show="!showCartState" v-if="burgerCategory===2">{{ uiLabels.chooseTopping }}</p>
      <p class="categoryText" v-show="!showCartState" v-if="burgerCategory===4">{{ uiLabels.chooseBread }}</p>
      <p class="categoryText" v-show="!showCartState" v-if="burgerCategory===3">{{ uiLabels.chooseSauce }}</p>
        <div class="ingredients-grid">
          <Ingredient
          ref="ingredient"
          v-for="item in ingredients"
          v-if="item.category===burgerCategory"
          v-on:increment="addToOrder(item)"
          v-on:decrease="deleteFromOrder(item)"
          v-on:highlight="activateDesign()"
          :item="item"
          :lang="lang"
          :key="item.ingredient_id">
          </Ingredient>
        </div>
      </div>

  <div v-show="step===6">
   <popularBurgerPage
     class="menupage"
     :ui-labels="uiLabels"
     :lang="lang"
     v-on:menuPage="newPage(2)"
     >
   </popularBurgerPage>
 </div>

 <div v-show="step===7">
   <randomBurgerPage
     class="menupage"
     :ui-labels="uiLabels"
     :lang="lang"
     v-on:menuPage="newPage(2)"
     >
   </randomBurgerPage>
 </div>
  </div>
  <div id="last-page-wrapper">
    <transition name="last-page">
      <div v-show="step===9" class="lastPage">
        <i id="goodbye">{{uiLabels.lastPage}}</i>
        <button v-on:click="newPage(0)">whoa</button>
      </div>
    </transition>
  </div>
  <div class="footer" v-show="footerBoolean">
    <br>
    <span style="font-weight:bold">{{ uiLabels.order }}: </span><span>{{ chosenIngredients.map(item => item["ingredient_"+lang]).join(' + ') }}</span><br>
    <span style="font-weight:bold">{{ uiLabels.totalPrice}} </span> <span>{{ price }}:-</span><br>
    <br><button class="footerbutton" v-on:click="addToCart()">{{ uiLabels.addToCart }}</button><br>
    <!--<button class="footerbutton" v-on:click="placeOrder()"> {{ uiLabels.placeOrder }}  </button>--><br>
  </div>
</div>
</template>
<script>

//import the components that are used in the template, the name that you
//use for importing will be used in the template above and also below in
//components
import Ingredient from '@/components/Ingredient.vue'
import IngredientPage from '@/components/IngredientPage.vue'
import OrderItem from '@/components/OrderItem.vue'
import StartingPage from '@/components/StartingPage.vue'
import MenuPage from '@/components/MenuPage.vue'
import HamburgerPage from '@/components/HamburgerPage.vue'
import DesignPage from '@/components/DesignPage.vue'
import popularBurgerPage from '@/components/popularBurgerPage.vue'
import randomBurgerPage from '@/components/randomBurgerPage.vue'
import shoppingCart from '@/components/shoppingCart.vue'

//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'

/* instead of defining a Vue instance, export default allows the only
necessary Vue instance (found in main.js) to import your data and methods */
export default {
  name: 'Ordering',
  components: {
    Ingredient,
    IngredientPage,
    OrderItem,
    StartingPage,
    MenuPage,
    HamburgerPage,
    DesignPage,
    popularBurgerPage,
    randomBurgerPage,
    shoppingCart
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
                            // the ordering system and the kitchen
  data: function() { //Not that data is a function!
    return {
      chosenIngredients: [],
  //=====Shopping cart===========
      shoppingCart: [],
      showCartState: false,
      shoppingItemPrices: [],
      burgerAmount: 0,

  //=============================
      totalPrice: 0,
      price: 0,
      orderNumber: [],
      step: 0,
      burgerCategory: 4,
      sideCategory: 5,
      beverageCategory: 6,
      categoryChanged: '',
      isActive: false,
      indexChosenIngredients: 0,
      clickedOn1: "orangeBorder",
      clickedOn2: '',
      clickedOn3: '',
      clickedOn4: '',
      clickedOn5: "greenBorder",
      clickedOn6: "purpleBorder",
      footerBoolean: false
    }
  },
  created: function () {
    this.$store.state.socket.on('orderNumber', function (data) {
      this.orderNumber = data;
    }.bind(this));
  },
  methods: {
    newPage: function(toPage){
      this.step = toPage;
      this.showFooter();
      if(toPage === 0){
        this.setToZero();
      }
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
        case 6: this.clickedOn6 = "purpleBorder"
        this.beverageCategory = 6
        break;
      }
    },
    resetCategory: function () {
      this.clickedOn1 = '';
      this.clickedOn2 = '';
      this.clickedOn3 = '';
      this.clickedOn4 = '';
      this.clickedOn5 = '';
      this.clickedOn6 = '';
    },
    activateDesign: function () {
      this.isActive = true;
      //console.log('hej');
    },
    showFooter: function () {
      if (!this.showCartState && (this.step === 5 || this.step === 3 || this.step === 4)) {
        this.footerBoolean = true;
      }
    },
    setToZero: function () {
      var i;
      for (i = 0; i < this.$refs.ingredient.length; i += 1) {
        this.$refs.ingredient[i].resetCounter();
      }
      this.price = 0;
      this.chosenIngredients = [];
      this.shoppingCart.items = [];
    },
    cancelOrder: function (toPage) {
      this.setToZero();
      this.resetCategory();
      switch (toPage) {
        case 1: this.newPage(1)
        break;
        case 2: this.newPage(2)
        break;
      }
      this.clickedOn1 = "orangeBorder";
      this.clickedOn5 = "greenBorder";
      this.clickedOn6 = "purpleBorder";
      this.footerBoolean = false;
    },
    addToOrder (item) {
      this.chosenIngredients.push(item);
      this.price += +item.selling_price;
    },
    deleteFromOrder (item) {
      if (this.price > 0) {
      //console.log('i funktionen');
        for (var i = 0; i < this.chosenIngredients.length; i += 1) {
          if (this.chosenIngredients[i] === item) {
            this.price -= item.selling_price;
            this.chosenIngredients.splice(i,1);
          }
        }
      }
    },
    placeOrder: function () {

      var order = {
        ingredients: this.shoppingCart,
        price:       this.price
      };

      this.$store.state.socket.emit('order', order);
      console.log("emitting 'order' object");
      if(this.shoppingCart.length > 0){
        this.showCart();
        this.newPage(6);
      }

      this.price = 0;
      this.totalPrice = 0;
      this.shoppingCart = [];
      this.burgerAmount = 0;
    },
    exitOrder: function () {
      this.newPage(0);
      this.price = 0;
      this.shoppingCart = [];
      this.totalPrice = 0;
      this.burgerAmount = 0;
    },
    addToCart: function () {
      if(this.chosenIngredients.length > 0){
        this.shoppingCart.push(this.chosenIngredients);
        this.shoppingItemPrices.push(this.price);
        this.burgerAmount += 1;
        // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
        //this.$store.state.socket.emit('order', {order: order});
        //set all counters to 0. Notice the use of $refs

        for (var j = 0; j < this.$refs.ingredient.length; j += 1) {
          this.$refs.ingredient[j].resetCounter();
        }
        this.chosenIngredients = [];
        this.totalPrice += this.price;
        this.price = 0;
        this.newPage(1);
        this.footerBoolean = false;
      }
      this.resetCategory();
      this.clickedOn1 = "orangeBorder";
     },

    showCart: function() {
        if (this.showCartState === false) {
            this.showCartState = true;
            if (this.step === 5 || this.step === 3 || this.step === 4) {
              this.footerBoolean = false;
            }
        }
        else {
            this.showCartState = false;
            if (this.step === 5 || this.step === 3 || this.step === 4) {
              this.footerBoolean = true;
            }
        }
        //console.log("click! i'm showing: "+this.showCartState)
    }
  }
}
</script>
<style scoped>
/* CSS: scoped in the style tag means that these rules will only apply to elements, classes and ids in this template and no other templates. */
#ordering {
  margin:auto;
  max-width: 40em; /*sidan skalas om när fönstret minskas*/
  font-family: Helvetica, sans-serif;
  text-align: center;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 22vh;
}

.ordering-pages {
  grid-column: 1;
  grid-row: 1;
  padding-left: 0.3em;
  padding-right: 0.3em;
}

.orderItem {
  border: 1px solid black;
  background-color: white;
  left: 0;
}

.categoryText {
  font-size: 3vw;
  font-style: italic;
  font-weight: bold;
}

.ingredients-grid {
 display: grid;
 grid-template-columns: repeat(auto-fit, 7em);
 grid-gap: 0.5em;
 justify-content: center;
}

.menupage {
  /*border: 1px solid #ccd;*/
  padding: 1em;
  /*background-image: url('~@/assets/exampleImage.jpg');*/
  color: black;
  text-align: center;
}

template {
  margin: 0;
  height: 100%;
  overflow: hidden
}

.category-buttons {
  display: grid;
  justify-content: center;
  padding-top: 1em;
  grid-column: 5fr;
  grid-row: 1fr;
}

.buttonmenu {
  width: 5em;
  height: 5em;
  border-radius: 1em;
  border: 1px solid #000;
  margin: 0.2em;
  cursor: pointer;
}

.button-one {
  grid-column: 2;
  grid-row: 1;
}

.button-two {
  grid-column: 3;
  grid-row: 1;
}

.button-three {
  grid-column: 4;
  grid-row: 1;
}

.button-four {
  grid-column: 5;
  grid-row: 1;
}

.exitbutton {
  grid-column: 1;
  grid-row: 1;
  float: left;
}

#last-page-wrapper{
  margin: auto;
}

.footerbutton {
  font-weight: bold;
  width: 60%;
  height: 4em;
  border-radius: 1em;
  border: 1px solid #000;
  margin: 0.1em;
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

.purpleBorder {
  border: 2px solid #c27ba0ff;
}

.cancelButton {
  position: relative;
  width: 100%;
  left: 0;
}

.footer {
  position: fixed;
  width: 100%;
  height: 20vh;
  left: 0;
  bottom: 0;
  padding: 0.1em;
  background-color: #ccc;
}

.example-panel {
  width: 100%;
  height: 10em;
  max-height: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
  left:0;
  top:0;
  z-index: -2;
}

#goodbye{
  padding-top: 4em;
  font-size: xx-large;
}

.last-page-enter-active{
    transition: all 1s ease;
  }

.last-page-leave-active{
    transition: all .5s;
  }

.last-page-enter, .last-page-leave-to{
    transform: translateY(600px);
  }

@keyframes lasagna {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

.slide-fade-enter-active {
  transition: all .2s;
}
.slide-fade-leave-active {
  transition: all .2s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(300px);

}

</style>
