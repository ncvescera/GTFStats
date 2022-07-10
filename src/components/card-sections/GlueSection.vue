<template>
  <div class="row">
    <div class="col-10">
      <h3>C-Foam 💦</h3>
    </div>
    <div class="col-2 text-end">
      <button
        class="btn"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#collapseExample-glue-${data.persistentID}`"
        aria-expanded="false"
        :aria-controls="`collapseExample-glue-${data.persistentID}`"
        @click="this.isCollapsed = !this.isCollapsed"
      >
        <template v-if="this.isCollapsed">
          <DownArrow />
        </template>
        <template v-else>
          <UpArrow />
        </template>
      </button>
    </div>
  </div>

  <div class="collapse show" :id="`collapseExample-glue-${data.persistentID}`">
    <table class="table table-striped">
      <colgroup>
        <col class="col-10" />
        <col class="col-2" />
      </colgroup>
      <tbody>
        <tr>
          <td>Glue Tolerance</td>
          <td>{{ data.GlueTolerance }}</td>
        </tr>
        <tr>
          <td>Glue FadeOut Time</td>
          <td>{{ data.GlueFadeOutTime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DownArrow from "../icons/DownArrow.vue";
import UpArrow from "../icons/UpArrow.vue";

export default {
  name: "GlueSection",
  components: {
    DownArrow,
    UpArrow,
  },
  data: function () {
    return {
      isCollapsed: false,
    };
  },
  props: ["data"],
};
</script>

<style scoped>
</style>