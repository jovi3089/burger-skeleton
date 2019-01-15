<template>
  <div>
      <div class = "langwrapper">
        <button id = "sweButton" class = "langbutton" v-on:click="$emit('switchLang')"
        :disabled = "isSwe(lang)" v-bind:style="{borderColor: computedSweBorderColor}" ><img src = "@/assets/SvenskaFlaggan.jpg"></button>
        <button id = "engButton" class = "langbutton" v-on:click="$emit('switchLang')"
        :disabled = "isEng(lang)" v-bind:style="{borderColor: computedEngBorderColor}"><img src = "@/assets/UnionJack.jpg"></button>
      </div>
      <div class = "wrappalicious">

      <div class = "wrapper">
        <button class="toorderpagebutton" v-on:click="toOrderPage"> {{ uiLabels.toOrderPage }}</button>
      </div>
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
      isSwedish: false,
      isEnglish: false,
      sweBorderColor: "#a2c4c9ff",
      engBorderColor: "#00FF00"
    };
  },

  computed: {
    computedSweBorderColor: function(){
        if (this.isSwedish){
          this.sweBorderColor = "#00FF00";
        }
        else {
          this.sweBorderColor = "#a2c4c9ff";
        }
        return this.sweBorderColor
      },

    computedEngBorderColor: function(){
      if (this.isEnglish){
        this.engBorderColor = "#00FF00";
      }
      else {
        this.engBorderColor = "#a2c4c9ff";
      }
      return this.engBorderColor
    }
  },

  methods: {
    toOrderPage: function () {
      this.$emit('orderpage');
    },

    isSwe: function(lang) {
      if (lang === "sv"){
        this.isSwedish = true;
        this.isEnglish = false;
      }
      return this.isSwedish;
    },

    isEng: function(lang) {
      if (lang === "en"){
        this.isEnglish = true;
        this.isSwedish = false;
      }
      return this.isEnglish;
    }
  }
}
</script>

<style scoped>
.wrapper{
  display: flex;
  justify-content: center;
  height: 80%;

}

.langwrapper{
  display: flex;
  flex-direction: row-reverse;
  height: 20%;
  margin-right: 0.4em;
  margin-top: 0.4em;
}

#sweButton img{
  display: block;
  position: relative;
  height: 8.5vh;
  width: 27vw;
  left: -21px;
  top: -16px;
  border-radius: 20px;
}

#engButton img{
  display: block;
  position: relative;
  height: 8.5vh;
  width: 27vw;
  left: -21px;
  top: -16px;
  border-radius: 20px;
}

.langbutton {
  display: inline-block;
  position: relative;
  width: 30vw;
  height: 10vh;
  border-radius: 20px;
  border-width: 20px;
  background-color: #a2c4c9ff;
  color: black;
  opacity: 0.8;
  font-weight: bold;
  font-size: 1em;
}

.toorderpagebutton {
  position: relative;
  width: 78vw;
  height: 30vh;
  border-radius: 1em;
  color: red;
  opacity: 0.8;
  font-weight: bold;
  font-size: 2em;
  margin-top: 60%;
  font-family: inherit;
  border: 1px solid #9dbec3ff;
  background-image: -webkit-linear-gradient(top, #d0e0e3ff, #76a5afff);
  background-image: -moz-linear-gradient(top, #d0e0e3ff, #76a5afff);
  background-image: -ms-linear-gradient(top, #d0e0e3ff, #76a5afff);
  background-image: -o-linear-gradient(top, #d0e0e3ff, #76a5afff);
  background-image: linear-gradient(to bottom, #d0e0e3ff, #76a5afff);
}

@media screen and (min-width: 600px){
  .toorderpagebutton{
    font-size: 3.5em;
    margin-top: 50%;
  }

  #engButton img{
    left: -16px;
    top: -14px;
  }
  #sweButton img{
    left: -16px;
    top: -14px;
  }
}

  /*transition: 0.5s ease;
}

langbutton:hover {
  width: 300px;
*/

</style>
