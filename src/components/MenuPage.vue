<template>
  <div>
    <h1>Menupage</h1>
    <label>
      <button class="button" id="buttonburg" v-on:click="burgerPush"> {{ uiLabels.hamburger }}</button>
    </label>
    <label>
      <button class="button" id="buttonside" v-on:click="sidesPush"> {{ uiLabels.sides }}</button>
    </label>
    <label>
      <button class="button" id="buttonbev" v-on:click="beveragePush"> {{ uiLabels.beverage }}</button>
    </label>
  </div>
</template>
<script>
export default {
  name: 'MenuPage',
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
    burgerPush: function () {
      this.$emit('burger');
    },
    sidesPush: function () {
      this.$emit('side');
    },
    beveragePush: function () {
      this.$emit('beverage');
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

#buttonburg {
    background-color: #ffab40ff; /* Green */
}

#buttonside {
    background-color: #93c47dff; /* Green */
}

#buttonbev {
    background-color: #c27ba0ff; /* Green */
}
</style>
