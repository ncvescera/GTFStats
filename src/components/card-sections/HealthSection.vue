<template>
  <div class="row">
    <div class="col-10">
      <h3>
        <span class="title-section">Health 🩸</span>
      </h3>
    </div>
    <div class="col-2 text-end">
      <button
        class="btn"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#collapseExample-${data.persistentID}`"
        aria-expanded="false"
        :aria-controls="`collapseExample-${data.persistentID}`"
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

  <div class="collapse show" :id="`collapseExample-${data.persistentID}`">
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
  </div>
</template>

<script>
export default {
  name: "HealthSection",
  data: function () {
    return {
      isCollapsed: false,
    };
  },
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
  /* display: inline-block; */
}
table {
  margin-bottom: 2em !important;
}

.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>