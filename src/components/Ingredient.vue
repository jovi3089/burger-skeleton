<template>
  <div class="ingredient">
    <label>
      <button v-on:click="incrementCounter">+</button> <br>
      {{item["ingredient_"+ lang]}} <br>
      {{item.selling_price}}:- <br>
      <button v-on:click="decreaseCounter">-</button>
      <!--, {{item.stock}} pcs-->
    </label>
    <!--<label>
      <button class="button" id="buttonburg" v-on:click="categoryPush()"> {{ uiLabels.hamburger }}</button>
    </label>-->
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
      this.$emit('highlight');
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
  margin: auto;
  width: 5em;
  height: 5em;
}

.grid-wrapper {
  display: grid;
  grid-template-columns: auto auto auto auto;/*repeat(auto-fit, 9em);*/
  margin: auto auto;
  grid-gap: 1em;
}

label {
  text-align: center;
  margin: auto auto;
}
/*stycket ovan kan lika väl ligga i ordering.vue <style>*/
</style>
