<template>
  <div class = "popularBurgerPage">
    <p id = "title">{{uiLabels.ourMostPopularBurgers}}<p/>
    <div class = "container">
      <p class = "numberOfPopularity one">(#1)<p/>
      <p class = "displayPopularBurger first">(most popular burger)<p/>
      <button class = "burgerButton firstButton">select/order</button>
      <p class = "numberOfPopularity two">(#2)<p/>
      <p class = "displayPopularBurger second">(second most popular burger)<p/>
      <button class = "burgerButton secondButton">select/order</button>
      <p class = "numberOfPopularity three">(#3)<p/>
      <p class = "displayPopularBurger third">(third most popular burger)<p/>
      <button class = "burgerButton thirdButton">select/order</button>
    </div>
    <button v-on:click="$emit('menuPage')" class="buttonmenu" id="back">
      <i class="fa fa-arrow-left" style="font-size: 20px;"></i>
    </button>
    <p>(footer här?)<p/>

  </div>
</template>

<script>
export default {
  name: 'StartingPage',
  props: {
    uiLabels: Object,
    lang: String,
    step: Number,
  }
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

#title{
  font-size: 2em;
}
.container{
  display: grid;
  grid-template-rows: 5% 20% 5% 20% 5% 20%;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 0;
}
.numberOfPopularity{
  grid-column: 1;
  display: flex;
  border-radius: 15px;
}
.one{
  grid-row: 1;
}
.two{
  grid-row: 3;
}
.three{
  grid-row: 5;
}
.displayPopularBurger{
  grid-column: 1;
  display: flex;
  border-radius: 15px;
}
.first{
  grid-row: 2;
}
.second{
  grid-row: 4;
}
.third{
  grid-row: 6;
}
.burgerButton{
  grid-column: 2;
  display: flex;
  border-radius: 15px;
}
.firstButton{
  grid-row: 2; /*placeringen ändras inte när värdet ändras på dessa. Vet ej varför /Erik*/
}
.secondButton{
  grid-row: 4;
}
.thirdButton{
  grid-row: 6;
}
</style>
