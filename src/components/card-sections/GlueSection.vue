<template>
  <h3>C-Foam 💦</h3>

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
</template>

<script>
export default {
  name: "GlueSection",

  props: ["data"],
};
</script>

<style scoped>
</style>