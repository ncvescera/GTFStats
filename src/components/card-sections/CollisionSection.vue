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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-down-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
            />
          </svg>
        </template>
        <template v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-up-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
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
export default {
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