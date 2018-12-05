<template>
  <div>
    <label>
      <button v-on:click="changePage(1)"> {{ uiLabels.workFlow }}</button>
    </label>
    <label>
      <button v-on:click="changePage(2)"> {{ uiLabels.saldo }}</button>
    </label>
    <label>
      <button v-on:click="changePage(3)"> {{ uiLabels.statistics }}</button>
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

<style lang="css">
</style>
