<template>
  <!--<div v-show="step===1"> </div>-->
  <!--skapa en component för när man designar burgaren,
    samt gör varje steg till komponenter, innehållande
    css i resp komponent-->
  <div id="ordering">
    <img class="example-panel">
    <button v-on:click="switchLang()">{{ uiLabels.language }}</button>

    <div v-show = "step===0">
      <h1>Page 0</h1>
      <StartingPage>
      </StartingPage>
      <button v-on:click="newPage(1)">Switch to page 1</button>
    </div>

    <div v-show="step===1">
      <MenuPage
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
    <h1>{{ uiLabels.ingredients }}</h1>

    <Ingredient
      ref="ingredient"
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
    MenuPage
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
                            // the ordering system and the kitchen
  data: function() { //Not that data is a function!
    return {
      chosenIngredients: [],
      price: 0,
      orderNumber: "",
//<<<<<<< HEAD
      step: 0,
//=======
      category: 1
//>>>>>>> 63448c715c6124b2e33f1836f13303e57fdf1b3e
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
}

.orderItem {
  border: 1px solid red;
  left: 0;
}

/*.relative {
  position: relative;
}*/

.ingredient {
  width: 7em;
  border: 1px solid #ccd;
  padding: 1em;
  background-image: url('~@/assets/exampleImage.jpg');
  color: white;
}

.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, 9em);
  grid-gap: 1em;
}

.example-panel {
  background-color: white;
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
