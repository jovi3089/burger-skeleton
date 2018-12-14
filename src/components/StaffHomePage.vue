<template>
  <div class="home">
    <p id = "topText">{{uiLabels.welcomeStaff}}</p>
    <label>
      <button class="button" id="workFlowButton" v-on:click="changePage(1)"> {{ uiLabels.workFlow}}</button>
    </label>
    <label>
      <button class="button" id= "saldoButton" v-on:click="changePage(2)"> {{ uiLabels.saldo }}</button>
    </label>
    <label>
      <button class="button" id="statisticsButton" v-on:click="changePage(3)"> {{ uiLabels.statistics}}</button>
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
  /*border: 1px solid #ccd;*/
  padding: 1em;
  /*background-image: url('~@/assets/exampleImage.jpg');*/
  background-color: white;
  color: black;
  position: absolute;
  width:100%;
  height:100%;
}
.button {
    background-color: #ffab40ff; /* Green */
    /*border-radius: 2em;*/
    position: relative;
    top: 20%;
    border: 1px solid #000;
    width: 32%;
    height: 70%;
    color: white;
    /*padding: 15px 32px;*/
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    font-size: 3em;
}
#topText{
  text-align: center;
  font-size: 3em;
  font-weight: bold;
  color: black;
}

#workFlowButton{
  background: #ffab40ff url(https://1001freedownloads.s3.amazonaws.com/vector/thumb/82752/kitchen-knife_spoon_fork.png)
  10px 10px no-repeat;
  background-size: 9em;
  background-position: center;
}

#saldoButton{
  background: #ffab40ff url(https://openclipart.org/download/304217/1531719574.svg)
  10px 10px no-repeat;
  background-size: 9em;
  background-position: center;
}

#statisticsButton{
  background: #ffab40ff url(https://1001freedownloads.s3.amazonaws.com/vector/thumb/115092/stockup.png)
  10px 10px no-repeat;
  background-size: 9em;
  background-position: center;
}
</style>
