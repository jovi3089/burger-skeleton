<template>
  <div class="root">
    <div class="wrapper">
      <div class="header">
        <p id="maintitle">Statistics</p>
      </div>
      <div class="title A">
        <p class="headerCategory">{{uiLabels.burgerBread}}</p>
      </div>
        <div class="list a">
          <div
          v-for="item in breads"
          :key="item[0]"
          >
            <p>{{findProduct(item[0])}}: {{item[1]}}</p>
          </div>
        </div>
        <div class="title B">
          <p class="headerCategory">{{uiLabels.burgerPatty}}</p>
        </div>
        <div class="list b">
          <div
          v-for="item in pattys"
          :key="item[0]"
          >
            <p>{{findProduct(item[0])}}: {{item[1]}}</p>
          </div>
        </div>
        <div class="title C">
          <p class="headerCategory">{{uiLabels.burgerTopping}}</p>
        </div>
        <div class="list c">
          <div
          v-for="item in toppings"
          :key="item[0]"
          >
            <p>{{findProduct(item[0])}}: {{item[1]}}</p>
          </div>
        </div>
        <div class="title D">
          <p class="headerCategory">{{uiLabels.burgerSauce}}</p>
        </div>
        <div class="list d">
          <div
          v-for="item in sauces"
          :key="item[0]"
          >
            <p>{{findProduct(item[0])}}: {{item[1]}}</p>
          </div>
        </div>
        <div class="title E">
          <p class="headerCategory">{{uiLabels.sideOptions}}</p>
        </div>
        <div class="list e">
          <div
          v-for="item in sides"
          :key="item[0]"
          >
            <p>{{findProduct(item[0])}}: {{item[1]}}</p>
          </div>
        </div>
        <div class="title F">
          <p class="headerCategory">{{uiLabels.statisticsCombo}}</p>
        </div>
        <div class="list f">
          <div
          v-for="item in combos"
          :key="item[0]"
          >
              <p>{{findCombo(item[0])}}: {{item[1]}}</p>
          </div>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  props: {
    orders: Object, //från shared
    ingredients: Array,
    uiLabels: Object,
    lang: String
  },
  watch: {
    orders: function () {
      this.resetData();
      var obj = this.orders;
      this.pattysCount(obj);
      this.toppingsCount(obj);
      this.saucesCount(obj);
      this.breadCount(obj);
      this.sidesCount(obj);
      this.combosCount(obj);
      this.pattys = this.sortData(this.pattys);
      this.toppings = this.sortData(this.toppings);
      this.sauces = this.sortData(this.sauces);
      this.breads = this.sortData(this.breads);
      this.sides = this.sortData(this.sides);
      this.combos = this.sortData(this.combos);
      var top3Combos = this.getTop3(this.combos);
      this.$store.state.socket.emit('combo', top3Combos);
    }
  },
  data: function () {
    //keys represent ingredients_id, value is number represented in orders
    return {
      pattys: [[1, 0], [2, 0], [3, 1], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0]],
      toppings: [[11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], [18, 0], [19, 0], [20, 0],
                 [21, 0], [22, 0], [23, 0], [24, 0], [25, 0], [26, 0], [27, 0], [28, 0], [29, 0], [30, 0],
                 [31, 0], [32, 0], [33, 0], [34, 0]],
      sauces: [[35, 0], [36, 0], [37, 0], [38, 0], [39, 0], [40, 0], [41, 0], [42, 0], [43, 0], [44, 0],
               [45, 0], [46, 0], [47, 0], [48, 0], [49, 0]],
      breads: [[50, 0], [51, 0], [52, 0], [53, 0]],
      sides: [[54, 0], [55, 0], [56, 0]],
      combos: []
    }
  },

  methods: {
    findProduct: function (id) {
      for (var i = 0; i < this.ingredients.length; i++) {
        if (parseInt(this.ingredients[i].ingredient_id) === parseInt(id)) {
          var ans = this.ingredients[i].ingredient_en;
          return ans;
        }
      }
    },
    findCombo: function (id) {
      var numOfIngreds = (id.toString().length)/2;
      var ans = "";
      id = id.toString();
      for (var i = 0; i < numOfIngreds*2; i = i+2) {
        var temp = id.substring(i, i+2);
        if (temp[0] === "0") {
          temp = temp[1];
        }
        var temp2 = this.findProduct(parseInt(temp));
        ans = ans + temp2 + ", ";
      }
      ans = ans.slice(0, ans.length - 2)
      return ans;
    },
    sortData: function(data) {
      var ans = data;
      ans.sort(function(first, second) {
        return second[1] - first[1];
      });
      return ans;
    },
    pattysCount: function (orders) {
      for (var key in orders) {
        var oneOrder = orders[key].ingredients;
        for (var i = 0; i < oneOrder.length; i++) {
          var orderInOrder = oneOrder[i];
          for (var ind in orderInOrder) {
            if(orderInOrder[ind].category === 1){
              var index = this.findIndex(orderInOrder[ind].ingredient_id, this.pattys);
              this.pattys[index][1] = this.pattys[index][1] + 1;
            }
          }
        }
      }
    },
    toppingsCount: function (orders) {
      for (var key in orders) {
        var oneOrder = orders[key].ingredients;
        for (var i = 0; i < oneOrder.length; i++) {
          var orderInOrder = oneOrder[i];
          for (var ind in orderInOrder) {
            if(orderInOrder[ind].category === 2){
              var index = this.findIndex(orderInOrder[ind].ingredient_id, this.toppings);
              this.toppings[index][1] = this.toppings[index][1] + 1;
            }
          }
        }
      }
    },
    saucesCount: function (orders) {
      for (var key in orders) {
        var oneOrder = orders[key].ingredients;
        for (var i = 0; i < oneOrder.length; i++) {
          var orderInOrder = oneOrder[i];
          for (var ind in orderInOrder) {
            if(orderInOrder[ind].category === 3){
              var index = this.findIndex(orderInOrder[ind].ingredient_id, this.sauces);
              this.sauces[index][1] = this.sauces[index][1] + 1;
            }
          }
        }
      }
    },
    breadCount: function (orders) {
      for (var key in orders) {
        var oneOrder = orders[key].ingredients;
        for (var i = 0; i < oneOrder.length; i++) {
          var orderInOrder = oneOrder[i];
          for (var ind in orderInOrder) {
            if(orderInOrder[ind].category === 4){
              var index = this.findIndex(orderInOrder[ind].ingredient_id, this.breads);
              this.breads[index][1] = this.breads[index][1] + 1;
            }
          }
        }
      }
    },
    sidesCount: function (orders) {
      for (var key in orders) {
        var oneOrder = orders[key].ingredients;
        for (var i = 0; i < oneOrder.length; i++) {
          var orderInOrder = oneOrder[i];
          for (var ind in orderInOrder) {
            if(orderInOrder[ind].category === 5){
              var index = this.findIndex(orderInOrder[ind].ingredient_id, this.sides);
              this.sides[index][1] = this.sides[index][1] + 1;
            }
          }
        }
      }
    },
    combosCount: function (orders) {
      for (var key in orders) {
        var oneOrder = orders[key].ingredients;
        for (var i = 0; i < oneOrder.length; i++) {
          var orderInOrder = oneOrder[i];
          var id = this.getCombosId(orderInOrder);
          var index = this.findIndex(id, this.combos);
          if(typeof index === "number"){
            this.combos[index][1] = this.combos[index][1] + 1;
          }
          else{
            var newCombo = [id, 1];
            this.combos.push(newCombo);
          }
        }
      }
    },
    findIndex: function (id, array) {
      for (var i = 0; i <array.length; i++) {
        if (array[i][0] === id) {
          return i;
        }
      }
      return false;
    },
    getCombosId: function (subOrder) {
      var ans = "";
      if (subOrder.length != 0) {
        for (var index in subOrder ) {
          var id = subOrder[index].ingredient_id;
          if (parseInt(id) < 10) {
            id = id.toString();
            id = "0" + id;
          }
          ans = ans + id;
        }
        ans = parseInt(ans);
        return ans;
      }
      else{
        return 1;
      }
    },
    getTop3: function (array) {
      var ans = [0, 0, 0];
      ans[0] = array[0][0];
      ans[1] = array[1][0];
      ans[2] = array[2][0];
      return ans;
    },
    resetData: function () {
      this.pattys = [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0]];
      this.toppings = [[11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], [18, 0], [19, 0], [20, 0],
                 [21, 0], [22, 0], [23, 0], [24, 0], [25, 0], [26, 0], [27, 0], [28, 0], [29, 0], [30, 0],
                 [31, 0], [32, 0], [33, 0], [34, 0]];
      this.sauces = [[35, 0], [36, 0], [37, 0], [38, 0], [39, 0], [40, 0], [41, 0], [42, 0], [43, 0], [44, 0],
               [45, 0], [46, 0], [47, 0], [48, 0], [49, 0]];
      this.breads = [[50, 0], [51, 0], [52, 0], [53, 0]];
      this.sides = [[54, 0], [55, 0], [56, 0]];
      this.combos = [];

    }
  }
}
</script>

<style>
.wrapper {
  /*width: 100vw; vw 100% of the page width is covered by saldo*/
  /*height: 100vh; vw 100% of the page height is covered by saldo*/
  height: 92vh;
  width: 100vw;
  display: grid;
  /*justify-content: flex-start; /*The items start at top*/
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 10% 5% 38.5% 5% 38.5%;
  font-size: 12pt;
  grid-row-gap: 0.3em;
  grid-column-gap: .5em;
  padding: 0 0 0 0;
}

.header {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 1;
    border: 5px solid grey;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

.headerCategory {
    font-size: 2em;
    font-weight: bold;
    margin: 0;
}

.title{
  padding-left: 0.5em;
}

.A{
  background-color: #D2691E;
  grid-column: 1;
  grid-row: 2;
}
.B{
  background-color: pink;
  grid-column: 2;
  grid-row: 2;
}
.C{
  background-color: orange;
  grid-column: 3;
  grid-row: 2;
}
.D{
  background-color: yellow;
  grid-column: 1;
  grid-row: 4;
}
.E{
  background-color: lightblue;
  grid-column: 2;
  grid-row: 4;
}
.F{
  background-color: green;
  grid-column: 3;
  grid-row: 4;
}

.list {
  overflow-y: scroll;
  padding-left: 2em;
}

.a {
  background-color: #D2691E;
  grid-column: 1;
  grid-row: 3;
}
.b {
  background-color: pink;
  grid-column: 2;
  grid-row: 3;
}
.c {
  background-color: orange;
  grid-column: 3;
  grid-row: 3;
}
.d {
  background-color: yellow;
  grid-column: 1;
  grid-row: 5;
}
.e {
  background-color: lightblue;
  grid-column: 2;
  grid-row: 5;
}
.f {
  background-color: green;
  grid-column: 3;
  grid-row: 5;
}
#maintitle {
    display: block;
    text-transform: uppercase;
    padding-left: 1em;
    font-size: 3vw;
    font-style: italic;
    font-weight: bold;
  }

</style>
