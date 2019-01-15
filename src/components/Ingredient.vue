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
   border: 1px solid #d0e0e3ff;
   border-radius: 2em;
   background-color: #abe2ecff; /*#a2c4c9ff;*/
   padding: 1em 1em 1em 1em;
   /*background-image: url('~@/assets/exampleImage.jpg');*/
   color: black;
   font-size: 0.8em;
   width: 6.5em;
   height: 7em;
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
   text-align: center;
 }

 .text {
   max-width: 6.5em;
   overflow-wrap: break-word;
   word-wrap: break-word;
   hyphens: auto;
   grid-row: 1;
 }

 .price {
   grid-row: 2;
   margin-top: 0;
 }

 .decrinc-buttons {
   grid-row: 3;
 }

 button {
   width: 3.1em;
   height: 2.3em;
   font-weight: bold;
   border: 1px solid black;
   padding: 0px;
   cursor: pointer;
 }

@media screen and (min-width: 600px){
  .ingredient{
    font-size: 1.3em;
  }

  button{
    font-weight: bold;
    font-size: 1em;
    width: 3em;
    height: 2em;
  }
}



 #decreasebutton {
   background-color: #93c47dff; /* Green */
   border:1px solid #9e665a; /*#93c47dff;/*#ffad41;*/
   background-image: -webkit-linear-gradient(top, #d98c7bff, #b93822); /*#6aa84fff #b6d7a8ff*/
   background-image: -moz-linear-gradient(top, #d98c7bff,#b93822);
   background-image: -ms-linear-gradient(top, #d98c7bff, #b93822);
   background-image: -o-linear-gradient(top, #d98c7bff, #b93822);
   background-image: linear-gradient(to bottom, #d98c7bff, #b93822);
   border-radius: 0.7em 0em 0em 0.7em;
 }

 #increasebutton {
   background-color: #93c47dff; /* Green */
   border:1px solid #91bb79ff;/*#ffad41;*/
   background-image: -webkit-linear-gradient(top, #addf90ff, #91bb79ff);
   background-image: -moz-linear-gradient(top, #addf90ff, #91bb79ff);
   background-image: -ms-linear-gradient(top, #addf90ff, #91bb79ff);
   background-image: -o-linear-gradient(top, #addf90ff, #91bb79ff);
   background-image: linear-gradient(to bottom, #addf90ff, #91bb79ff);
   border-radius: 0em 0.7em 0.7em 0em;
 }

 button:hover {
   background-color: #ccc;
 }

/*stycket ovan kan lika väl ligga i ordering.vue <style>*/
</style>
