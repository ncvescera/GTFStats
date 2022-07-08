<template>
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

  mounted() {
    console.log("getting data ..");
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

          // sort data by enemy.name
          this.enemydata.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          );

          this.isloading = false;
          // console.log(this.enemydata);
        });
    },
  },
};
</script>

<style>
</style>
