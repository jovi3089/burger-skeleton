<template> <!--sätter massa ### för ord som inte ännu är i ui_lang-->
  <div>
    <div id="header"><!--header typ "kundkorg"-->
      <h1>###header###</h1>
      <button v-on:click="close()">###close the cart###</button>
    </div>
    <div id="orders"><!--innehållet-->
      <h1>###inhl###</h1>
      <div v-for="shoppingCartItem in shoppingCart">
        {{shoppingCartItem["ingredient_"+ lang]}}
      </div>
    </div>
    <div id="footer"><!--footer med beställknapp-->
      <h1>###footer###</h1>
    </div>
  </div>
</template>
<script>
export default{
    name: "shoppingCart",
    props: {
      shoppingCart: Array,
      uiLabels: Object,
      order: Object,
      orderId: String,
      lang: String
    },
    methods: {
      close: function(){
        this.$emit('closeCart');
      }
    },
}
</script>
<style scoped>
</style>
