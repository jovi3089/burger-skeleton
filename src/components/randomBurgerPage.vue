<template>
  <div>
    <div class="cart-popup" v-show="showPopUp">
        <div class="popup-content" id="popup-shade" v-show="showPopUp">
          <div class="pricetext" id="popup-text">{{uiLabels.emptyShopping}}</div>
            <button class="close-button" v-on:click="close()">{{uiLabels.goToMenu}}</button>
        </div>
      </div>
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

  .cart-popup {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    /*opacity: 0;
    visibility: hidden;*/
    transform: scale(1.1);
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
  }

  .popup-content {
    position: absolute;
    top: 50%;
    left: 52%;
    background-color: white;
    transform: translate(-50%, -50%);
    /*padding: 1rem 1.5rem;*/
    width: 48%;
    height: 5em;
    border-radius: 1.5em;
    box-shadow: 10px 10px 60px #555;
  }

  #popup-text {
    padding-top: 2em;
    padding-bottom: 1.2em;
  }

  .close-button {
    text-align: center;
    cursor: pointer;
    font-size: 1.2em;
    border-style: none;
    border-radius: 0.5em;
    padding: 0.3em;
    background-color: #93c47dff; /* Green */
    border:1px solid #6aa84fff;/*#ffad41;*/
    background-image: -webkit-linear-gradient(top, #addf90ff, #6aa84fff);
    background-image: -moz-linear-gradient(top, #addf90ff, #6aa84fff);
    background-image: -ms-linear-gradient(top, #addf90ff, #6aa84fff);
    background-image: -o-linear-gradient(top, #addf90ff, #6aa84fff);
    background-image: linear-gradient(to bottom, #addf90ff, #6aa84fff);
  }

  .close-button:hover {
    background-color: darkgray;
  }

</style>
