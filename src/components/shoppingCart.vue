<template> <!--sätter massa ### för ord som inte ännu är i ui_lang-->
  <div class="root">
    <div class="shopwrapper">
      <div class="shopa">
          {{uiLabels.shoppingCartContent}}
      </div>

      <div class="shopb">
        <li
        v-for="index in orders.length"
        :key="index">
          {{getOrder(index)}}
        </li>
      </div>
      <div class="shopc">
        <div>
          {{uiLabels.totalPrice}} {{totalPrice}} kr
        </div>
        <br>
        <button class="footerbutton" v-on:click="placeOrder()">
          {{uiLabels.placeOrder}}
        </button>
        <br>
        <button id="the-close-button" v-on:click="close()">
          {{uiLabels.closeCart}}
        </button>
      </div>
    </div>
  </div>

</template>
<script>
export default{
    name: "shoppingCart",
    components:{
    },
    props: {
      uiLabels: Object,
      lang: String,
      orderId: String,
      totalPrice: Number,
      orders: Array
    },
    data: function () {
    return {
      orderDisplay: [],

    };
  },
    methods: {
      close: function(){
        this.$emit('closeCart');
      },
      placeOrder: function(){
        this.$emit('placeOrder');
      },
      getOrder: function(ind) {
        var numOfItems = this.orders[ind-1].length;
        console.log(numOfItems);
        var order = this.orders[ind-1];
        var ans = "";
        for (var i = 0; i < numOfItems; i++) {
          if (ans===""){
            switch(this.lang){
              case "en":
                ans = ans + order[i].ingredient_en
              break;
              case "sv":
                ans = ans + order[i].ingredient_sv
              break;
            }
          }
          else{
            switch(this.lang){
              case "en":
                ans = ans + ", " + order[i].ingredient_en
              break;
              case "sv":
                ans = ans + ", " + order[i].ingredient_sv
              break;
            }
          }
        }
        return ans;
      },
    },
}
</script>
<style scoped>
.root{
  height: 92vh;
  width: 100%;
}
.shopwrapper {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 80% auto;
  padding: 0 0 0 0;
}
.shopa{
  grid-column: 1;
  grid-row: 1;
  border: 2px solid #a2c4c9ff;
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.shopb{
  grid-column: 1;
  grid-row: 2;
  border: 2px solid #a2c4c9ff;
  border-radius: 15px;
  display: block;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: scroll;
}
.shopc{
  grid-column: 1;
  grid-row: 3;
  border: 2px solid #a2c4c9ff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

}
.footerbutton {
  width: 12em;
  height: 4em;
  border-radius: 0.5em;
  border: 1px solid #000;
  margin: 0.5em;
  cursor: pointer;
  font-weight: bold;
}

#the-close-button{
  width: 12em;
  height: 4em;
  border-radius: 0.5em;
  border: 1px solid #000;
  margin: 0.5em;
  cursor: pointer;
  font-weight: bold;
}
</style>
