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
      /* let request = function (url, callback, async = true) {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            // success state, execute the callback function
            callback(this.responseText);
          }
        };

        xhttp.open("GET", url, async);
        xhttp.send();
      };

      request(
        "https://raw.githubusercontent.com/UntiIted/OriginalDataBlocks/master/EnemyBalancingDataBlock.json",
        function (response) {
          var jsonData = JSON.parse(response);
          console.log(jsonData.Blocks);
          this.enemydata = jsonData.Blocks;
          //this.$set(this.enemydata, jsonData.Blocks);
          // do some stuff with jsonData
        }
      ); */
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
