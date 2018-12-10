<template>
  <div class="designpage">
    <Ingredient
    ref="ingredient"
    v-for="item in ingredients"
    v-if="item.category===category"
    v-on:increment="addToOrder(item)"
    v-on:changeCategory="changeCategory(2)"
    :item="item"
    :lang="lang"
    :key="item.ingredient_id">
    </Ingredient>
  </div>
</template>
<script>

import Ingredient from '@/components/Ingredient.vue'

export default {
  name: 'DesignPage',
  components: {
    Ingredient
  },
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

.designpage {
  width: 5em;
  border-radius: 50%;
  display: grid;
  grid-template-columns: auto auto auto auto;/*repeat(auto-fit, 9em);*/
  margin: auto auto;
  grid-gap: 1em;
}

</style>
