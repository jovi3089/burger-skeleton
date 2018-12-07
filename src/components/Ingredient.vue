<template>
  <div class="ingredient">
    <label>
      <button v-on:click="incrementCounter">{{ counter }}</button>
      {{item["ingredient_"+ lang]}}, {{item.selling_price}}:-, {{item.stock}} pcs
    </label>
    <!--<label>
      <button class="button" id="buttonburg" v-on:click="categoryPush()"> {{ uiLabels.hamburger }}</button>
    </label>-->
    </label>
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
    resetCounter: function () {
      this.counter = 0;
    }
  }
}
</script>
<style scoped>
/*stycket ovan kan lika väl ligga i ordering.vue <style>*/
</style>
