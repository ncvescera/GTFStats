<template>
  <div class="row">
    <div class="col-10">
      <h3>Collision 🧱</h3>
    </div>
    <div class="col-2 text-end">
      <button
        class="btn"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#collapseExample-collision-${data.persistentID}`"
        aria-expanded="false"
        :aria-controls="`collapseExample-collision-${data.persistentID}`"
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
  <div
    class="collapse show"
    :id="`collapseExample-collision-${data.persistentID}`"
  >
    <table class="table table-striped">
      <colgroup>
        <col class="col-10" />
        <col class="col-2" />
      </colgroup>
      <tbody>
        <tr>
          <td>Can be Pushed?</td>
          <td>{{ data.CanBePushed ? "✅" : "❌" }}</td>
        </tr>
        <tr>
          <td>Collision Minimum MoveSpeed Modifier</td>
          <td>{{ data.EnemyCollisionMinimumMoveSpeedModifier }}</td>
        </tr>
        <tr>
          <td>Collision Movement Reduction</td>
          <td>{{ data.EnemyCollisionPlayerMovementReduction }}</td>
        </tr>
        <tr>
          <td>Collision Radius</td>
          <td>{{ data.EnemyCollisionRadius }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DownArrow from "../icons/DownArrow.vue";
import UpArrow from "../icons/UpArrow.vue";
export default {
  components: { DownArrow, UpArrow },
  name: "CollisionSection",
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