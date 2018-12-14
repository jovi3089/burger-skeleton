<template>
  <div class="ingredient">
    <div class="ingredientdesign">
      <button class="buttondesign" v-on:click="incrementCounter">+</button><br>
      <span class="textdesign"> {{item["ingredient_"+ lang]}}, {{item.selling_price}}:- </span><br>
    <!--, {{item.stock}} pcs-->
      <button v-on:click="decreaseCounter">-</button>
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
   border-radius: 50%;
   background-color: #a2c4c9ff;
   padding: 1em;
   /*background-image: url('~@/assets/exampleImage.jpg');*/
   color: black;
   margin: auto auto;
   width: 5em;
   height: 5em;
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   justify-content: center;
 }

 .textdesign {
   font-size: 0.8em;
   word-wrap: break-word;
   text-align: center;
   margin: auto;
 }

 .ingredientdesign {
 }

 button {
   width: 1.5em;
   height: 1.5em;
   border: 1px solid black;
   background-color: #d0e0e3ff;
   border-radius: 50%;
   padding: 0px;
   cursor: pointer;
 }

 button:hover {
   background-color: #ccc;
 }

/*stycket ovan kan lika väl ligga i ordering.vue <style>*/
</style>
