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

            <span
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Enemies will stagger if you do damage equal to their stagger hp number or if you destroy a body part. The stagger hp damage is cumulative, so two 20 damage shots to a big striker will cause him to stagger, even if you're hitting a bodypart that is already destroyed, and one 15+ damage hit on an in-tact body part will destroy it and stagger him immediately, so aim for fresh parts and you can keep them stun-locked!"
            >
              <RoundedInfo w="15" h="15" />
            </span>
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
import bootstrap from "bootstrap/dist/js/bootstrap.js";

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
  mounted() {
    //console.log(bootstrap);
    window.addEventListener("load", () => {
      // run after everything is in-place
      var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      // eslint-disable-next-line no-unused-vars
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    });
  },
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