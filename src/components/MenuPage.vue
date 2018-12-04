<template>
  <div class="menupage">
    <h1>Menupage</h1>
    <label>
      <button v-on:click="burgerPush"> {{ hamburger }}</button>
    </label>
    <label>
      <button v-on:click="sidesPush"> {{ sides }}</button>
    </label>
    <label>
      <button v-on:click="beveragePush"> {{ beverage }}</button>
    </label>
  </div>
</template>
<script>
export default {
  name: 'MenuPage',
  props: {
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
      this.step = 2;
    },
    sidesPush: function () {
      this.step = 3;
    },
    beveragePush: function () {
      this.step = 4;
    }
  }
}
</script>
<style scoped>
.menupage {
  border: 1px solid #ccd;
  padding: 1em;
  /*background-image: url('~@/assets/exampleImage.jpg');*/
  background-color: #ffffff;
  color: black;
}
</style>
