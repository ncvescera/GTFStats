<template>
  <NavBar @pageChange="updateActualPage" />

  <component v-bind:is="actualPage"></component>

  <FooterBar />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import EnemyPage from "./components/pages/Enemies/EnemyPage.vue";
import MeleePage from "./components/pages/Melee/MeleePage.vue";
import FooterBar from "./components/FooterBar.vue";
import { pagesIds } from "./commonData/pagesIds";

export default {
  name: "App",
  components: {
    NavBar,
    EnemyPage,
    MeleePage,
    FooterBar,
  },

  data: function () {
    return {
      actualPage: pagesIds["enemies"],
    };
  },
  mounted() {
    document.title = "GTFStats"; // change title
    console.log(pagesIds);
    console.log(pagesIds["enemies"]);
  },
  methods: {
    updateActualPage(value) {
      this.actualPage = value;
    },
  },
};
</script>

<style>
</style>
