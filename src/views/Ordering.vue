<template>
  <!--<div v-show="step===1"> </div>-->
  <!--skapa en component för när man designar burgaren,
    samt gör varje steg till komponenter, innehållande
    css i resp komponent-->
  <div id="ordering">
    <img class="example-panel" src="@/assets/background-board-spices.jpg">
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
      <h1>Page 1</h1>
      <button v-on:click="newPage(0)">Tillbaka</button>
      <button v-on:click="newPage(2)">Switch to page 2</button>
    </div>

    <div v-show="step===2">
      <HamburgerPage
      class="menupage"
      :ui-labels="uiLabels"
      :lang="lang"
      v-on:designBurger="newPage(5)">
      </HamburgerPage>
      <h1>Page 2</h1>
      <button v-on:click="newPage(1)">Tillbaka</button>
      <button v-on:click="newPage(3)">Switch to page 3</button>
    </div>

    <div v-show="step===3">
      <h1>Page 3</h1>
      <button v-on:click="newPage(2)">Tillbaka</button>
      <button v-on:click="newPage(4)">Switch to page 4</button>
    </div>

    <div v-show="step===4">
      <h1>Page 3</h1>
      <button v-on:click="newPage(2)">Tillbaka</button>
      <button v-on:click="newPage(5)">Switch to page 5</button>
    </div>

    <div v-show = "step===5">
    <button v-on:click="changeCategory(1)">Protein</button>
    <button v-on:click="changeCategory(2)">Pålägg</button>
    <button v-on:click="changeCategory(3)">Sås</button>
    <h1>{{ uiLabels.ingredients }}</h1>

    <Ingredient
      ref="ingredient"
      class="box"
      v-for="item in ingredients"
      v-if="item.category===category"
      v-on:increment="addToOrder(item)"
      :item="item"
      :lang="lang"
      :key="item.ingredient_id">
    </Ingredient>

    <div class="footer">
      <h1>{{ uiLabels.order }}</h1>
        {{ chosenIngredients.map(item => item["ingredient_"+lang]).join(', ') }}, {{ price }} kr
          <button v-on:click="placeOrder()">{{ uiLabels.placeOrder }}</button>
    </div>

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
    </div>
    </div>
  </div>
</template>
<script>

//import the components that are used in the template, the name that you
//use for importing will be used in the template above and also below in
//components
import Ingredient from '@/components/Ingredient.vue'
import OrderItem from '@/components/OrderItem.vue'
import StartingPage from '@/components/StartingPage.vue'
import MenuPage from '@/components/MenuPage.vue'
import HamburgerPage from '@/components/HamburgerPage.vue'
import DesignPage from '@/components/DesignPage.vue'

//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'



/* instead of defining a Vue instance, export default allows the only
necessary Vue instance (found in main.js) to import your data and methods */
export default {
  name: 'Ordering',
  components: {
    Ingredient,
    OrderItem,
    StartingPage,
    MenuPage,
    HamburgerPage,
    DesignPage
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
                            // the ordering system and the kitchen
  data: function() { //Not that data is a function!
    return {
      chosenIngredients: [],
      price: 0,
      orderNumber: "",
      step: 0,
      category: 1,
      categoryChanged: false
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
    },
    changeCategory: function (toCategory) {
      this.category = toCategory;
    },
    addToOrder: function (item) {
      this.chosenIngredients.push(item);
      this.price += +item.selling_price;
    },
    placeOrder: function () {
      var i,
      //Wrap the order in an object
        order = {
          ingredients: this.chosenIngredients,
          price: this.price
        };
      // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
      this.$store.state.socket.emit('order', {order: order});
      //set all counters to 0. Notice the use of $refs

      for (i = 0; i < this.$refs.ingredient.length; i += 1) {
        this.$refs.ingredient[i].resetCounter();
      }
      this.price = 0;
      this.chosenIngredients = [];
    }
  }
}
</script>
<style scoped>
/* CSS: scoped in the style tag means that these rules will only apply to elements, classes and ids in this template and no other templates. */
#ordering {
  margin:auto;
  max-width: 40em; /*sidan skalas om när fönstret minskas*/
  padding-bottom: 20em;
  font-family: Helvetica, sans-serif;
  text-align: center;
}

.orderItem {
  border: 1px solid red;
  left: 0;
}

/*.relative {
  position: relative;
}*/

.box {
  color: #fff;
  border-radius: 50%;
  font-size: 100%;
  width: 75px;
  height: 75px;
  display: flex;
  flex-wrap: wrap;
  margin: 5px;

  /*grid-template-columns: repeat(1, minmax(1em 1fr));*/
}

.grid-wrapper {
  display: grid;
  grid-template-columns: auto auto auto auto;/*repeat(auto-fit, 9em);*/
  margin: auto auto;
  grid-gap: 1em;
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

.footer {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 1em;
  background-color: #ccc;
}

</style>
