<template>
  <div class="row">
    <div class="col-10">
      <h3>Damage 🗡️</h3>
    </div>
    <div class="col-2 text-end">
      <button
        :id="`collapseButtonDamage-${data.persistentID}`"
        class="btn"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#collapseExample-damage-${data.persistentID}`"
        aria-expanded="false"
        :aria-controls="`collapseExample-damage-${data.persistentID}`"
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

  <div class="collapse" :id="`collapseExample-damage-${data.persistentID}`">
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
  </div>
</template>

<script>
import MinusIcon from "../../../icons/MinusIcon.vue";
import PlusIcon from "../../../icons/PlusIcon.vue";

export default {
  components: { PlusIcon, MinusIcon },
  name: "DamageSection",
  data: function () {
    return {
      isCollapsed: true,
    };
  },
  props: ["data"],
  methods: {
    collapse() {
      document
        .getElementById(`collapseButtonDamage-${this.data.persistentID}`)
        .click();
    },
  },
};
</script>

<style scoped>
</style>