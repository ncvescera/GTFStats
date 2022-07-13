<template>
  <NavBar @pageChange="updateActualPage" />

  <template v-if="actualPage == pagesIds['enemies']">
    <EnemyPage />
  </template>
  <template v-else> Io sono un contenuto di prova !! </template>

  <FooterBar />
</template>



<script>
import NavBar from "./components/NavBar.vue";
import EnemyPage from "./components/Enemies/EnemyPage.vue";
import FooterBar from "./components/FooterBar.vue";
import { pagesIds } from "./commonData/pagesIds";

export default {
  name: "App",
  components: {
    NavBar,
    EnemyPage,
    FooterBar,
  },

  data: function () {
    return {
      pagesIds: pagesIds, // need to do this so pageIds is accessible inside DOOM
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
