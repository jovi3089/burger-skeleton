<template>
  <div class="ingredient">
    <div class="ingredientdesign">
      <div class="textdesign text"> {{item["ingredient_"+ lang]}} </div>
      <div class="textdesign price"> {{item.selling_price}}:- </div>

    <!--, {{item.stock}} pcs-->
      <div class="decrincr-buttons">
        <button id="decreasebutton" v-on:click="decreaseCounter">-</button>
        <button id="increasebutton" v-on:click="incrementCounter">+</button>
      </div>
</div>
  </div>
</template>
<script>
export default {
  name: 'Ingredient',
  props: {
    item: Object,
    lang: String
  },
    data: function () {
    return {
      counter: 0
    };
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1;
      // sending 'increment' message to parent component or view so that it
      // can catch it with v-on:increment in the component declaration
      this.$emit('increment'); //$emit sends a message which ordering.vue
                              //is listening to
    },
    decreaseCounter: function () {
      this.counter -= 1;
      this.$emit('decrease');
    },
    resetCounter: function () {
      this.counter = 0;
    }
  }
}
</script>
<style scoped>

.ingredient {
   border: 1px solid #000;
   border-radius: 2em;
   background-color: #a2c4c9ff;
   padding: 1em;
   /*background-image: url('~@/assets/exampleImage.jpg');*/
   color: black;

   font-size: 0.8em;
   width: 6.5em;
   height: 6.5em;
   /*display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   justify-content: center;*/
 }

 .ingredientdesign {
   display: grid;
   grid-template-rows: repeat(auto-fit, 4em);
   /*grid-template-columns: 1fr;
   grid-template-rows: 3fr;*/
 }

 .textdesign {
   word-wrap: break-word;
   text-align: center;
 }

 .text {
   grid-row: 1;
   font-weight: bold;
 }

 .price {
   grid-row: 2;
 }

 .decrinc-buttons {
   grid-row: 3;
 }

@media screen and (min-width: 600px){
  .ingredient{
    font-size: 1.2em;
  }
}

 button {
   width: 3em;
   height: 2em;
   border: 1px solid black;
   border-radius: 0.7em;
   padding: 0px;
   cursor: pointer;
 }

 #decreasebutton {
   background-color: #ea9999ff;
 }

 #increasebutton {
   background-color: #93c47dff;
 }

 button:hover {
   background-color: #ccc;
 }

/*stycket ovan kan lika väl ligga i ordering.vue <style>*/
</style>
