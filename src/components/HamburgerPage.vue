<template>
  <div>
    <label>
      <button class="button" id="buttondesign" v-on:click="menuPush(1)"> {{ uiLabels.designBurger }}</button>
    </label>
    <label>
      <button class="button" id="buttonpopular" v-on:click="menuPush(2)"> {{ uiLabels.popularBurger }}</button>
    </label>
    <label>
      <button class="button" id="buttonrandom" v-on:click="menuPush(3)"> {{ uiLabels.randomBurger }}</button>
    </label>
  </div>
</template>
<script>
export default {
  name: 'HamburgerPage',
  props: {
    uiLabels: Object,
    lang: String,
    step: Number
  },
  data: function () {
    return {
      hamburger: "Hamburgare",
      sides: "Tillbehör",
      beverage: "Dryck",
      nextStep: ''
    };
  },
  methods: {
    menuPush: function (menuChoice) {
      switch (menuChoice) {
        case 1: this.$emit('designBurger')
        break;
        case 2: this.$emit('popularBurger')
        break;
        case 3: this.$emit('randomBurger')
        break;
      }
    }
  }
}
</script>
<style scoped>

.button {
  border-radius: 2em;
  border: 1px solid #000;
  width: 25em;
  height: 5em;
  color: black;
  /*padding: 15px 32px;*/
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  display: block;
  /*font-size: 16px;*/
  margin: auto auto;
}

#buttondesign {
    background-color: #ffab40ff; /* Green */
}

#buttonpopular {
    background-color: #f9cb9cff; /* Green */
}

#buttonrandom {
    background-color: #fce5cdff; /* Green */
}
</style>
