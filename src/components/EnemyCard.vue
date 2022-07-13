<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div
          class="col-10"
          data-bs-toggle="collapse"
          :href="`#collapse${data.persistentID}`"
          role="button"
          aria-expanded="false"
          :aria-controls="`collapse${data.persistentID}`"
        >
          <b class="enemy-name">{{ data.name.replace("_", " ") }}</b>
        </div>
        <div class="col-2 text-end">
          <span
            class="btn btn-sm collapse"
            :id="`collapse${data.persistentID}`"
            @click="click()"
          >
            <EyeOpen w="20" h="20" />
          </span>
        </div>
      </div>
    </div>
    <div class="collapse" :id="`collapse${data.persistentID}`">
      <div class="card-body">
        <HealthSection :data="data" :ref="`health-${data.persistentID}`" />
        <DamageSection :data="data" :ref="`damage-${data.persistentID}`" />
        <CollisionSection
          :data="data"
          :ref="`collision-${data.persistentID}`"
        />
        <GlueSection :data="data" :ref="`glue-${data.persistentID}`" />
      </div>
    </div>
  </div>
</template>

<script>
import CollisionSection from "./card-sections/CollisionSection.vue";
import DamageSection from "./card-sections/DamageSection.vue";
import GlueSection from "./card-sections/GlueSection.vue";
import HealthSection from "./card-sections/HealthSection.vue";
import EyeOpen from "./icons/EyeOpen.vue";

export default {
  name: "EnemyCard",
  components: {
    HealthSection,
    DamageSection,
    CollisionSection,
    GlueSection,
    EyeOpen,
  },

  props: ["data"],
  methods: {
    click() {
      // element that are going to be collapsed/decollapsed
      let collapsingList = [
        this.$refs[`health-${this.data.persistentID}`],
        this.$refs[`damage-${this.data.persistentID}`],
        this.$refs[`collision-${this.data.persistentID}`],
        this.$refs[`glue-${this.data.persistentID}`],
      ];

      // check if all element are collapsed
      let areAllCollapsed = collapsingList.every(function (element) {
        return element.isCollapsed === true;
      });

      // check if all element ar NOT collapsed
      let areAllNOTCollapsed = collapsingList.every(function (element) {
        return element.isCollapsed === false;
      });

      //if all element are collapsed OR not collapsed
      areAllCollapsed || areAllNOTCollapsed
        ? // collapse/decollapse all
          collapsingList.forEach((element) => element.collapse())
        : //(nor collapsed/decollapsed) decollapse all collapsed
          collapsingList.forEach(
            (element) => element.isCollapsed && element.collapse()
          );
    },
  },
};
</script>

<style scoped>
.card {
  margin: 10px;
}
.enemy-name {
  font-size: larger;
}
</style>