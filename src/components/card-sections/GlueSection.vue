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
          <PlusIcon />
        </template>
        <template v-else>
          <MinusIcon />
        </template>
      </button>
    </div>
  </div>

  <div class="collapse" :id="`collapseExample-glue-${data.persistentID}`">
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
import PlusIcon from "../icons/PlusIcon.vue";
import MinusIcon from "../icons/MinusIcon.vue";

export default {
  name: "GlueSection",
  components: {
    PlusIcon,
    MinusIcon,
  },
  data: function () {
    return {
      isCollapsed: true,
    };
  },
  props: ["data"],
};
</script>

<style scoped>
</style>