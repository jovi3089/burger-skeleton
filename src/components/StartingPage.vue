<template>
  <div class = "startingpage">
    <label>
      <h1 class = "title">Starting</h1>
      <h1 class = "title">Page</h1>
      <button id = "langbutton" v-on:click="$emit('switchLang')">{{ uiLabels.language }}</button>
      <button id="toorderpagebutton" v-on:click="toOrderPage"> {{ uiLabels.toOrderPage }}</button>
    </label>
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
.title {
  color: white;
  font-weight: bold;
  font-size: 70px;
  padding: 0;
  margin: 0;
}
#langbutton {
  position: absolute;
  top: 10px;
  right:10px;
  width: 140px;
  height: 100px;
  border-radius: 20px;
  background-color: #ff5050;
  color: black;
  opacity: 0.8;
  font-weight: bold;
  font-size: 20px;
}

#toorderpagebutton{
  position: absolute;
  text-align: center;
  top: 300px;
  left:50px;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  background-color: #ff5050;
  color: black;
  opacity: 0.8;
  font-weight: bold;
  font-size: 20px;
}

  /*transition: 0.5s ease;
}

langbutton:hover {
  width: 300px;
*/

</style>
