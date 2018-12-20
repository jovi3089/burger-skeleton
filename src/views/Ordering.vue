<template>
  <!--<div v-show="step===1"> </div>-->
  <!--skapa en component för när man designar burgaren,
    samt gör varje steg till komponenter, innehållande
    css i resp komponent-->

<!-- ===========================================================================================================================-->
<!-- ===========================================================================================================================-->

  <div id="ordering">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <shoppingCart
    ref="shoppingCart"
    v-show="showCartState"
    v-on:closeCart="showCart()"
    :shoppingCart="this.shoppingCart.items"
    :lang="this.lang"
    :orders="orders"
    :ui-labels="uiLabels"
    id = "shopping-cart"
    ></shoppingCart>
    <div v-show = "step===0">
      <StartingPage
        :ui-labels="uiLabels"
        :lang="lang"
        @switchLang="switchLang"
        v-on:orderpage="newPage(1)">
      </StartingPage>
    </div>

    <div v-show="step===1">
      <MenuPage
      class="menupage"
      :ui-labels="uiLabels"
      :lang="lang"
      v-on:burger="newPage(2)"
      v-on:side="newPage(3)"
      v-on:beverage="newPage(4)">
      </MenuPage>
      <button v-on:click="newPage(0)">Cancel order</button>
    </div>

    <div v-show="step===2">
      <HamburgerPage
      class="menupage"
      :ui-labels="uiLabels"
      :lang="lang"
      v-on:designBurger="newPage(5)">
      </HamburgerPage>
      <button v-on:click="cancelOrder()">{{ uiLabels.back }}</button>
    </div>

<div v-show="!showCartState">
    <div v-show="step===3">
      <button class="buttonmenu" v-bind:class="clickedOn5" v-on:click="changeCategory(5)">{{ uiLabels.sideOptions }}</button>
      <button class="buttonmenu" v-on:click="showCart" id="shoppingCart">
        <i class="fa fa-shopping-cart" style="font-size:18px;"></i>
      </button>
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
      <h1>Page 3</h1>
      <button v-on:click="newPage(2)">{{uiLabels.back}}</button>
      <button v-on:click="newPage(5)">Switch to page 5</button>
    </div>
                  <!--    lägg till styling på shoppingcart      -->







      <div v-show ="step===5">
    <button class="buttonmenu" v-bind:class="clickedOn1" v-on:click="changeCategory(4)">{{ uiLabels.burgerBread }}</button>
    <button class="buttonmenu" v-bind:class="clickedOn2" v-on:click="changeCategory(1)">{{ uiLabels.burgerPatty }}</button>
    <button class="buttonmenu" v-bind:class="clickedOn3" v-on:click="changeCategory(2)">{{ uiLabels.burgerTopping }}</button>
    <button class="buttonmenu" v-bind:class="clickedOn4" v-on:click="changeCategory(3)">{{ uiLabels.burgerSauce }}</button>
    <button class="buttonmenu" v-on:click="showCart" id="shoppingCart">
      <i class="fa fa-shopping-cart" style="font-size:18px;"></i>
    </button>
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

    <!--<IngredientPage
      ref="ingredient"
      v-on:addtoorder="addToOrder"
      v-on:deletefromorder="deleteFromOrder"
      :category="burgerCategory"
      :ingredients="ingredients"
      :lang="lang"
      :ui-labels="uiLabels">
    </IngredientPage>-->

    <!--
    <h1>{{ uiLabels.ordersInQueue }}</h1>
    <div>
      <OrderItem
        class="orderItem"
        v-for="(order, key) in orders"
        v-if="order.status !== 'done'"
        :order-id="key"
        :order="order"
        :ui-labels="uiLabels"
        :lang="lang"
        :key="key">
      </OrderItem>
    </div>-->
      </div>
    </div>
    <div class="footer" v-show="footerBoolean">
      <button class="footerbutton" v-on:click="cancelOrder()">{{ uiLabels.back }}</button>
      <br><br>
      <span style="font-weight:bold">{{ uiLabels.order }}: </span><span>{{ chosenIngredients.map(item => item["ingredient_"+lang]).join(' + ') }}</span><br>
      <span style="font-weight:bold">{{ uiLabels.totalPrice}} </span> <span>{{ price }}:-</span><br>
          <br><button class="footerbutton" v-on:click="addToCart()">{{ uiLabels.addToCart }}</button><br>
          <button class="footerbutton" v-on:click="placeOrder()"> {{ uiLabels.placeOrder }}  </button>
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
    shoppingCart
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
                            // the ordering system and the kitchen
  data: function() { //Not that data is a function!
    return {
      chosenIngredients: [],
  //=====Shopping cart===========
      shoppingCart: {
        items: [],
        id: 0
      },
      showCartState: false,

  //=============================
      totalPrice: 0,
      price: 0,
      orderNumber: "",
      step: 0,
      burgerCategory: 4,
      sideCategory: 5,
      categoryChanged: '',
      isActive: false,
      indexChosenIngredients: 0,
      clickedOn1: "orangeBorder",
      clickedOn2: '',
      clickedOn3: '',
      clickedOn4: '',
      clickedOn5: "greenBorder",
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
    },
    activateDesign: function () {
      this.isActive = true;
      //console.log('hej');
    },
    showFooter: function () {
      if (!this.showCartState && (this.step === 5 || this.step === 3)) {
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
    cancelOrder: function () {
      this.setToZero();
      this.newPage(1);
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
      var i;
      //Wrap the order in an object
        /*order = {
          ingredients: this.shoppingCart.items,
          price:       this.price
        };*/
      // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
      //this.$store.state.socket.emit('order', {order: order});
      //set all counters to 0. Notice the use of $refs

      for (i = 0; i < this.$refs.ingredient.length; i += 1) {
        this.$refs.ingredient[i].resetCounter();
      }
      this.price = 0;
      this.shoppingCart.items = [];
    },

    addToCart: function () {
      if(this.chosenIngredients.length > 0){
      //Wrap the order in an object

        for(var i=0; i<this.chosenIngredients.length; i++){
            this.shoppingCart.items.push(this.chosenIngredients[i]);
        }
        var order = {
          ingredients: this.shoppingCart.items,
          price:       this.price
        };
        this.$store.state.socket.emit('order', {order: order});
        // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
        //this.$store.state.socket.emit('order', {order: order});
        //set all counters to 0. Notice the use of $refs

        for (var j = 0; j < this.$refs.ingredient.length; j += 1) {
          this.$refs.ingredient[j].resetCounter();
        }
        //this.price = 0; kanske vill ha mer ju
        this.chosenIngredients = [];
        this.totalPrice += this.price;
        this.price = 0;
        this.newPage(1);
        this.footerBoolean = false;
        //this.shoppingCart.id++;
        //console.log(this.price);
        //console.log(this.totalPrice);
        //console.log(this.shoppingCart[0]);
      }
     },

    showCart: function() {
        if (this.showCartState === false) {
            this.showCartState = true;
            this.footerBoolean = false;
          }
        else {
            this.showCartState = false;
            this.footerBoolean = true;
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
}

#shopping-cart{

}

.orderItem {
  border: 1px solid black;
  background-color: white;
  left: 0;
}

.categoryText {
  font-size: 2.5vw;
  font-style: italic;
  font-weight: bold;
}

/*.relative {
  position: relative;
}*/

.ingredients-grid {
 display: grid;
 grid-template-columns: repeat(auto-fit, 7em);
 grid-gap: 1em;
}

.grid-wrapper {
  display: inline-block;
  vertical-align: top;
  grid-template-columns: auto auto auto auto;/*repeat(auto-fit, 9em);*/
  margin: auto auto;
  grid-gap: 1em;
  color: #fff;
  border-radius: 50%;
  font-size: 100%;
  width: 75px;
  height: 75px;
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

.example-panel {
  width: 100%;
  height: 100%;
  max-height: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
  left:0;
  top:0;
  z-index: -2;
}

.buttonmenu {
  width: 5em;
  height: 5em;
  border-radius: 1em;
  border: 1px solid #000;
  margin: 0.5em;
  cursor: pointer;
}

.footerbutton {
  width: 12em;
  height: 2em;
  border-radius: 0.5em;
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

.cancelButton {
  position: relative;
  width: 100%;
  left: 0;
}

.footer {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 1em;
  background-color: #ccc;
}

</style>
