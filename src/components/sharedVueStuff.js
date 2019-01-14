'use strict';

// Stuff that is used both in the ordering system and in the kitchen
var sharedVueStuff = {
  data: function () {
    return {
      orders: {},
      burgerCombos: {},
      uiLabels: {},
      ingredients: [],
      lang: "en"
    }
  },
  created: function () {
    this.$store.state.socket.emit('pageReady');
    this.$store.state.socket.on('initialize', function (data) {
      this.orders = data.orders;
      this.uiLabels = data.uiLabels;
      this.burgerCombos = {1: 0, 2: 0, 3: 0};
      console.log("created: " +  this.burgerCombos[1])
      this.ingredients = data.ingredients; //<-- kanske här
      console.log(this.ingredients);
    }.bind(this));

    this.$store.state.socket.on('switchLang', function (data) {
      this.uiLabels = data;
    }.bind(this));

    this.$store.state.socket.on('currentQueue', function (data) {
      this.orders = data.orders;
      if (typeof data.ingredients !== 'undefined') {
        this.ingredients = data.ingredients;
      }
    }.bind(this));

    this.$store.state.socket.on('updateCombo', function(combo){
      console.log("i shared combo: "+ combo);
      var obj = this.burgerCombos;
      console.log("i shared bcombo: " + obj);
      this.burgerCombos[1] = 534501//combo[0]; nolla innan ental Fullkornsbrioche m senap och bönburgare
      this.burgerCombos[2] = combo[1]; //
      this.burgerCombos[3] = combo[2];
    }.bind(this))

  },
  methods: {
    switchLang: function () {
      if (this.lang === "en") {
        this.lang = "sv";
      } else {
        this.lang = "en";
      }
      this.$store.state.socket.emit('switchLang', this.lang);
    }
  }
};

export default sharedVueStuff;
