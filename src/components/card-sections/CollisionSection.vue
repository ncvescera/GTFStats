<template>
  <h3>Collision 🧱</h3>

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
</template>

<script>
export default {
  name: "CollisionSection",

  props: ["data"],
};
</script>

<style scoped>
</style>