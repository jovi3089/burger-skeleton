<template>
  <div id="timer">
    <span id="minutes">{{ helpDisplay(minutes) }}</span>
    <span id="middle">:</span>
    <span id="seconds">{{helpDisplay(seconds)}}</span>
  </div>
</template>

<script>
export default {
  name: 'Timer',


  data: function() {
    return {
      timer: null,
      totalTime: 0,
      minutes: 0,
      seconds: 0
    }
  },
  /*created: function () {
    this.startTimer();
},*/
  methods: {
    resetTimer: function () {
      clearInterval(this.timer);
      this.timer = null;
      this.totalTime = 0;
      this.minutes = 0;
      this.seconds = 0;
      console.log("reset");
    },
    startTimer: function() {
      this.timer = setInterval(() => this.countUp(), 1000);
      this.console.log("jag är i timer");
    },
    stopTimer: function () {
      clearInterval(this.timer);
    },
    countUp: function() {
      this.totalTime++;
      this.minutes = parseInt(this.totalTime/60, 10)
      this.seconds = parseInt(this.totalTime%60, 10);
      console.log(this.totalTime);
    },
    helpDisplay: function(time) {
      if (time < 10) {
        return "0" + "" + time;
      }
      else {
        return time + "";
      }
    }
  },
}



</script>

<style scoped>
</style>
