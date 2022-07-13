<template>
  <NavBar @pageChange="updateActualPage" />

  <template v-if="actualPage == 0">
    <EnemyPage />
  </template>
  <template v-else> Io sono un contenuto di prova !! </template>

  <FooterBar />
</template>



<script>
import NavBar from "./components/NavBar.vue";
import EnemyPage from "./components/Enemies/EnemyPage.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    EnemyPage,
    FooterBar,
  },

  data: function () {
    return {
      actualPage: 1,
    };
  },
  mounted() {
    document.title = "GTFStats"; // change title
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
