<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><b>GTFStats</b></a>
      <span class="navbar-text">
        Web UI for <span id="monospace">EnemyBalancingDataBlock</span> stats
        provided by
        <a href="https://github.com/UntiIted/OriginalDataBlocks" target="_balnk"
          >UntiIted/OriginalDataBlocks</a
        >
      </span>

      <form class="d-flex">
        <a
          class="btn"
          type="button"
          href="https://github.com/ncvescera/GTFStats"
          target="_blank"
        >
          <!-- Github SVG logo -->
          <GitHub />
        </a>
      </form>
    </div>
  </nav>
</template>

<script>
import GitHub from "./icons/GitHub.vue";

export default {
  name: "NavBar",
  components: {
    GitHub,
  },
};
</script>

<style scoped>
#monospace {
  font-family: "Courier New", monospace;
}
nav {
  margin-bottom: 2em !important;
}
</style>