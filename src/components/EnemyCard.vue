<template>
  <div class="card">
    <div
      class="card-header"
      data-bs-toggle="collapse"
      :href="`#collapse${data.persistentID}`"
      role="button"
      aria-expanded="false"
      :aria-controls="`collapse${data.persistentID}`"
    >
      <b class="enemy-name">{{ data.name.replace("_", " ") }}</b>
    </div>
    <div class="collapse" :id="`collapse${data.persistentID}`">
      <div class="card-body">
        <HealthSection />
        <DamageSection />
        <CollisionSection />
        <GlueSection />
      </div>
    </div>
  </div>
</template>

<script>
import CollisionSection from "./card-sections/CollisionSection.vue";
import DamageSection from "./card-sections/DamageSection.vue";
import GlueSection from "./card-sections/GlueSection.vue";
import HealthSection from "./card-sections/HealthSection.vue";

export default {
  name: "EnemyCard",
  components: {
    HealthSection,
    DamageSection,
    CollisionSection,
    GlueSection,
  },

  props: ["data"],
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