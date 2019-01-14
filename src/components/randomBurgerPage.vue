<template>
  <div>
      <button v-on:click="$emit('menuPage')" class="buttonmenu" id="back">
        <i class="fa fa-arrow-left" style="font-size: 20px;"></i>
      </button>
      <div class = "random">
        <p>Something Random<p/>
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
}

</script>

<style scoped>
  .buttonmenu {
    width: 5em;
    height: 5em;
    border-radius: 1em;
    border: 1px solid #000;
    margin: 0.2em;
    float: right;
    cursor: pointer;
  }

</style>
