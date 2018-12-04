<template>
  <div class = "startingpage">
    <label>
      <button v-on:click="switchLang()">{{ uiLabels.language }}</button>
      <h1>hej</h1>
    </label>
  </div>
</template>

<script>

export default {
  name: 'StartingPage'
  /*props: {
    uiLabels: Object,
  }*/
}
</script>

<style scoped>
#langbutton {
  top: 100px;
  right:100px;
  width: 100px;
  color: blue;
}

  /*transition: 0.5s ease;
}

langbutton:hover {
  width: 300px;
*/

</style>
