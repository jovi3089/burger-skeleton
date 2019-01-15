<template>
  <div class="root">
    <div class="modal" v-show="showPopUp">
        <div class="modal-content" v-show="showPopUp">
            <span class="close-button" v-on:click="showPopUp()">&times;</span>
            <h1>Hello, I am a modal!</h1>
        </div>
      </div>
    <div class="shopwrapper">
      <div class="shopa">
          <div id="title-span">{{uiLabels.shoppingCartContent}}</div>
          <button class="buttonmenu" id="the-close-button" v-on:click="close()">
            <i class="fa fa-shopping-cart fa-1x"></i>
          </button>
      </div>

      <div class="shopb">
        <dl
        v-for="index in orders.length"
        :key="index">
          <dt style="font-weight:bold">
            <button class="remove-burg" v-on:click="removeBurg(index)">
              <i class="fa fa-times fa-2x"></i>
            </button> {{uiLabels.hamburger}} {{index}}: <span class="cart-price">{{getPrice(index-1)}}:-</span>
          </dt>
          <dd><span class="cart-order">{{getOrder(index)}}</span></dd>
        </dl>
      </div>
      <div class="shopc">
        <div id = "price">
          <span>{{uiLabels.totalPrice}} {{ totalPrice }}:-</span>
        </div>
        <br>
        <button class="footerbutton" v-on:click="placeOrder()">
          <div>{{uiLabels.placeOrder}}</div> <i class="fa fa-arrow-right fa-1x"></i>
        </button>
        <br>
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
      orders: Array,
      price: Array
    },
    data: function () {
    return {
      orderDisplay: [],
      showPopUp: false
    };
  },
    methods: {
      close: function(){
        this.$emit('closeCart');
      },
      cancelOrder: function(){
        this.$emit('cancelOrder')
      },
      placeOrder: function(){
        if (this.orders.length > 0) {
          this.$emit('placeOrder');
        }
        else {
          this.showPopUp = true;
        }
      },
      getPrice: function (ind) {
        var orderPrice = this.price[ind];
        return orderPrice;
      },
      removeBurg: function (ind) {
        this.orders.splice(ind-1,1);
        this.price.splice(ind-1,1);
        this.$emit('removeBurg');
      },
      getOrder: function(ind) {
        var numOfItems = this.orders[ind-1].length;
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
                ans = ans + " + " + order[i].ingredient_en
              break;
              case "sv":
                ans = ans + " + " + order[i].ingredient_sv
              break;
            }
          }
        }
        return ans;
      },
      closePopUp: function () {
        this.showPopUp = false;
      }
    }
}
</script>
<style scoped>
.root{
  height: 73vh;
  width: 100%;
}
.shopwrapper {
  padding-top: 2em;
  padding-bottom: 2em;
  height: 100%;
  width: 80%;
  margin-left: 20%;
  display: grid;
  justify-content: center;
  grid-template-columns: 100%;
  grid-template-rows: 20% 96% 20%;
  padding: 0 0 0 0;
}

.shopa{
  grid-column: 1;
  grid-row: 1;
  border: 2px solid #a2c4c9ff;
  border-radius: 0.5em;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  display: grid;
  grid-template-columns: 2fr;
  grid-template-rows: 1fr;
  background-color: lightgrey;
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
  background-color: lightgrey;
}
.shopc{
  grid-column: 1;
  grid-row: 3;
  border: 2px solid #a2c4c9ff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgrey;
}

#price{
  font-weight: bold;
  font-size: 1.3em;
}

.footerbutton {
  width: 12em;
  height: 4em;
  border-radius: 0.8em;
  border: 1px solid #000;
  margin: 0.5em;
  cursor: pointer;
  font-weight: bold;
  font-family: inherit;
  font-size: 1em;
}

.buttonmenu {
  width: 2em;
  height: 2em;
  border-radius: 0.4em;
  border: 1px solid #000;
  margin: 0.2em;
  margin-right: 0.5em;
  cursor: pointer;
  grid-column: 2;
  font-size: 2em;
}

#the-close-button{
  background: #e5e5e5;
  -webkit-box-shadow: inset 0px 0px 5px #000000;
     -moz-box-shadow: inset 0px 0px 5px #000000;
          box-shadow: inset 0px 0px 5px #000000;
             outline: none;
               float: right;
         margin-left: auto
  /* width:  4em;
  height: 4em;
  border-radius: 0.5em;
  border: 1px solid #000;
  margin: 0.5em;
  cursor: pointer;
  font-weight: bold; */
}

#cancel-button{
  float: left;
}

#title-span{
  font-size: 1.8em;
  margin-top: auto;
  grid-column: 1;
  margin: auto auto;
}

dt {
  padding-left: 1em;
}

.cart-order {
  padding-right: 3em;
}

.cart-price {
  float: right;
  padding-right: 1em;
}

.remove-burg {
  float: left;
  color: #e06666ff;
  background-color: lightgrey;
  border-style: none;
}

<<<<<<< HEAD
.modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transform: scale(1.1);
        transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
    }
    .modal-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: black;
        padding: 1rem 1.5rem;
        width: 24rem;
        border-radius: 0.5rem;
    }
    .close-button {
        float: right;
        width: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        cursor: pointer;
        border-radius: 0.25rem;
        background-color: lightgray;
    }
    .close-button:hover {
        background-color: darkgray;
    }
    .show-modal {
        opacity: 1;
        visibility: visible;
        transform: scale(1.0);
        transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
    }


=======
@media screen and (min-width: 600px){
  .root{
    height: 73vh;
  }
  .shopwrapper{
    width: 90%;
    font-size: 1.8em;
  }
}
>>>>>>> 9527e0cc11390cb6f18c58daa99b9ed7267b76b6

</style>
