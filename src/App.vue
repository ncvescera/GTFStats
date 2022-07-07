<template>
  <br />

  <div class="container">
    <div class="row">
      <div class="col">
        <template v-if="isloading">
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </template>
        <template v-else>
          <EnemyCard v-for="enemy in enemydata" :key="enemy" :data="enemy" />
        </template>
      </div>
    </div>
  </div>
</template>



<script>
//import HelloWorld from './components/HelloWorld.vue'
import EnemyCard from "./components/EnemyCard.vue";
const axios = require("axios").default;

export default {
  name: "App",
  components: {
    EnemyCard,
  },

  data: function () {
    return {
      isloading: true,
      enemydata: [],
    };
  },

  created() {
    console.log("creating");
    this.getData();
  },

  methods: {
    getData() {
      axios
        .get(
          "https://raw.githubusercontent.com/UntiIted/OriginalDataBlocks/master/EnemyBalancingDataBlock.json"
        )
        .then((response) => {
          this.enemydata = response.data.Blocks;
          this.isloading = false;
          console.log(this.enemydata);
        });
    },
  },
};
</script>

<style>
</style>
