<template>
  <h3>Damage 🗡️</h3>

  <table class="table table-striped">
    <colgroup>
      <col class="col-10" />
      <col class="col-2" />
    </colgroup>
    <tbody>
      <tr>
        <td>Melee Attack Damage</td>
        <td>{{ data.MeleeAttackDamage }}</td>
      </tr>
      <tr>
        <td>Tentacle Attack Damage</td>
        <td>{{ data.TentacleAttackDamage }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "DamageSection",

  props: ["data"],
};
</script>

<style scoped>
</style>