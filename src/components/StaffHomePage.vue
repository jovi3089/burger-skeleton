<template>
  <div class="home">
    <label>
      <button class="button" v-on:click="changePage(1)"> {{ uiLabels.workFlow }}</button>
    </label>
    <label>
      <button class="button" v-on:click="changePage(2)"> {{ uiLabels.saldo }}</button>
    </label>
    <label>
      <button class="button" v-on:click="changePage(3)"> {{ uiLabels.statistics }}</button>
    </label>
  </div>
</template>

<script>
export default {
  name: 'StaffHomePage',
  props: {
    uiLabels: Object,
    lang: String
  },
  methods: {
    changePage: function (pageNr) {
      switch (pageNr) {
        case 1: this.$emit('workFlow')
        break;
        case 2: this.$emit('saldo')
        break;
        case 3: this.$emit('statistics')
        break;
      }
    }
  }
}
</script>

<style scoped>
.home {
  border: 1px solid #ccd;
  padding: 1em;
  /*background-image: url('~@/assets/exampleImage.jpg');*/
  background-color: #ccc;
  color: black;
  position: absolute;
}
.button {
    background-color: #ffab40ff; /* Green */
    border-radius: 2em;
    border: 1px solid #000;
    width: 25em;
    height: 25em;
    color: black;
    /*padding: 15px 32px;*/
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    font-size: 16px;

}
</style>
