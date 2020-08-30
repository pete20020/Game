<template>
  <div>
    <div class="row">
      <div class="col-sm">
        <div class="row">
          <div class="col">
            <button v-bind:disabled="end" @click="start()" class="btn btn-info">{{label}}Start</button>
          </div>
          <div class="col-3">
            <button @click="replay()" class="btn btn-info">{{label}}New Game</button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm">
            <div id="score">
              <div v-if="monster1.hp <= 0">WIN</div>
              <div v-else-if="player.hp <= 0">LOSE</div>
            </div>
          </div>
          <div class="col-sm"></div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <p style="font-size: 150%">{{player.name}}</p>
          <p style="font-size: 150%">{{player.hp}}</p>
          <p>
            <img style="width:150px" :src="player.image" />
          </p>
        </div>
        <div class="col-3">
          <p style="font-size: 150%">{{monster1.name}}</p>
          <p style="font-size: 150%">{{monster1.hp}}</p>
          <p>
            <img style="width:150px" :src="monster1.image" />
          </p>
        </div>
      </div>

      <div class="col-sm">
        <div class="row">
          <div class="col-3">
            <button v-bind:disabled="end" @click="attack()" class="btn btn-info ">{{label}}Attack</button>
            <button v-bind:disabled="end" @click="special()" class="btn btn-info">{{label}}Special Attack</button>
          </div>
          <br />
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
  },
  data: function () {
    return {
      thp: "HP:",
      end: false,
      player: { name: "", image: "" },
      monster1: { name: "", image: "" },
      hmax: "",
      mmax: "",
      hero: [
        {name: "Sage",hp: 200,},
        {name: "Raze",hp: 190,},
        {name: "Jett",hp: 195,},
        {name: "Sova",hp: 180,},
      ],
      monster: [
        {name: "Omen",hp: 200,},
        {name: "Reyna",hp: 185,},
        {name: "Viper",hp: 190,},
        {name: "Cypher",hp: 195,},
      ],
    };
  },
  methods: {
    randomno: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    start: function () {
      this.player = this.hero[this.randomno(1, 7) - 1];
      this.monster1 = this.monster[this.randomno(1, 7) - 1];
    },
    attack: function () {
      this.hmax = Math.floor(Math.random() * 10 + 4);
      this.monster1.hp = this.monster1.hp - this.hmax;
      this.mmax = Math.floor(Math.random() * 10 + 4);
      this.player.hp = this.player.hp - this.mmax;
      if (this.player.hp <= 0) {
        this.player.hp = 0;
        this.end = true;
      } else if (this.monster1.hp <= 0) {
        this.monster1.hp = 0;
        this.end = true;
      }
    },
    special: function () {
      this.hmax = Math.floor(Math.random() * 15 + 6);
      this.monster1.hp = this.monster1.hp - this.hmax;
      this.mmax = Math.floor(Math.random() * 15 + 6);
      this.player.hp = this.player.hp - this.mmax;
      if (this.player.hp <= 0) {
        this.player.hp = 0;
        this.end = true;
      } else if (this.monster1.hp <= 0) {
        this.monster1.hp = 0;
        this.end = true;
      }
    },
    replay: function () {
      window.location.reload();
    },
  },
};
</script>
<style>
#score {
  font-size: 300%;
  color: aliceblue;
}
</style>