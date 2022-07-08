<template>
  <h3>Health 🩸</h3>

  <table class="table table-striped">
    <colgroup>
      <col class="col-10" />
      <col class="col-2" />
    </colgroup>
    <tbody>
      <tr>
        <td>Max Health</td>
        <td>{{ data.Health.HealthMax }}</td>
      </tr>
      <tr>
        <td>BodyPart Health</td>
        <td>{{ data.Health.BodypartHealth }}</td>
      </tr>
      <tr>
        <td>Weakspot Damage Multi</td>
        <td>x{{ data.Health.WeakspotDamageMulti }}</td>
      </tr>
      <tr>
        <td>Armor Damage Multi</td>
        <td>x{{ data.Health.ArmorDamageMulti }}</td>
      </tr>
      <tr>
        <!-- This should be the "when is staggered" -->
        <td>Damage until Hit React</td>
        <td>{{ data.Health.DamageUntilHitreact }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "HealthSection",

  props: ["data"],
};
</script>

<style>
tr > td:nth-child(2) {
  font-style: italic;
}
tr > td:first-child {
  font-weight: bold;
}
h3 {
  font-weight: bold;
}
table {
  margin-bottom: 2em !important;
}
</style>