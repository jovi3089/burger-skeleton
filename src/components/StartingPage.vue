<template>
  <div>
      <div class = "langwrapper">
        <button id = "sweButton" class = "langbutton" v-on:click="$emit('switchLang')"
        :disabled = "isSwe(lang)" v-bind:style="{borderColor: computedSweBorderColor}" ><img src = "@/assets/SvenskaFlaggan.jpg"></button>
        <button id = "engButton" class = "langbutton" v-on:click="$emit('switchLang')"
        :disabled = "isEng(lang)" v-bind:style="{borderColor: computedEngBorderColor}"><img src = "@/assets/UnionJack.jpg"></button>
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
    step: Number,
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
}

.langwrapper{
  display: flex;
  flex-direction: row-reverse;
}


#sweButton img{
  display: block;
  position: relative;
  height: 8.5vh;
  width: 27vw;
  left: -20px;
  top: -15px;
  border-radius: 20px;
}

#engButton img{
  display: block;
  position: relative;
  height: 8.5vh;
  width: 27vw;
  left: -20px;
  top: -15px;
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
