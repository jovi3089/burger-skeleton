<template>
  <div>
      <div class = "langwrapper">
        <button class = "langbutton" v-on:click="$emit('switchLang')">Svenska</button>
        <button class = "langbutton" v-on:click="$emit('switchLang')">English</button>
      </div>
      <div class = "wrapper">
        <button id = "toorderpagebutton" v-on:click="toOrderPage"> {{ uiLabels.toOrderPage }}</button>
      </div>
  </div>
</template>

<script>

export default {
  name: 'StartingPage',

  props: {
    uiLabels: Object,
    lang: String,
    step: Number
  },
  data: function () {
    return {

    };
  },
  methods: {
    toOrderPage: function () {
      this.$emit('orderpage');
    }
  }
}
</script>

<style scoped>

.langwrapper{
  display: flex;
  flex-direction: row-reverse;
}

.wrapper{
  display: flex;
  justify-content: center;
}

.langbutton {
  position: relative;
  width: 30vw;
  height: 10vh;
  border-radius: 20px;
  background-color: #a2c4c9ff;
  color: black;
  opacity: 0.8;
  font-weight: bold;
  font-size: 1em;
}

#toorderpagebutton{
  position: relative;
  width: 98vw;
  height: 30vh;
  border-radius: 20px;
  background-color: #a2c4c9ff;
  color: black;
  opacity: 0.8;
  font-weight: bold;
  font-size: 2em;
  margin-top: 50%;
}

  /*transition: 0.5s ease;
}

langbutton:hover {
  width: 300px;
*/

</style>
