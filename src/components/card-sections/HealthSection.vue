<template>
  <div class="row">
    <div class="col-10">
      <h3>Health 🩸</h3>
    </div>
    <div class="col-2 text-end">
      <button
        class="btn"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#collapseExample-health-${data.persistentID}`"
        aria-expanded="false"
        :aria-controls="`collapseExample-health-${data.persistentID}`"
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
    :id="`collapseExample-health-${data.persistentID}`"
  >
    <table class="table table-striped">
      <colgroup>
        <col class="col-10" />
        <col class="col-2" />
      </colgroup>
      <tbody>
        <tr>
          <td>Health</td>
          <td>{{ data.Health.HealthMax }}</td>
        </tr>
        <tr>
          <td>Limb Health</td>
          <td>{{ data.Health.BodypartHealth }}</td>
        </tr>
        <tr>
          <td>Weakspot Damage mult.</td>
          <td>x{{ data.Health.WeakspotDamageMulti }}</td>
        </tr>
        <tr>
          <td>Armor Damage mult.</td>
          <td>x{{ data.Health.ArmorDamageMulti }}</td>
        </tr>
        <tr>
          <!-- This should be the "when is staggered" -->
          <td>
            Stagger Min Damage
            <RoundedInfo w="15" h="15" />
          </td>
          <td>{{ data.Health.DamageUntilHitreact }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DownArrow from "../icons/DownArrow.vue";
import UpArrow from "../icons/UpArrow.vue";
import RoundedInfo from "../icons/RoundedInfo.vue";

export default {
  name: "HealthSection",
  components: {
    UpArrow,
    DownArrow,
    RoundedInfo,
  },
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