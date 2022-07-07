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
        <!-- <h5 class="card-title">Special title treatment</h5> -->
        <div class="card-text">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                :id="`healt-tab-${data.persistentID}`"
                data-bs-toggle="tab"
                :data-bs-target="`#healt-${data.persistentID}`"
                type="button"
                role="tab"
                :aria-controls="`healt-${data.persistentID}`"
                aria-selected="true"
              >
                Healt 🩸
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                :id="`damage-tab-${data.persistentID}`"
                data-bs-toggle="tab"
                :data-bs-target="`#damage-${data.persistentID}`"
                type="button"
                role="tab"
                :aria-controls="`damage-${data.persistentID}`"
                aria-selected="false"
              >
                Damage 🗡️
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                :id="`collision-tab-${data.persistentID}`"
                data-bs-toggle="tab"
                :data-bs-target="`#collision-${data.persistentID}`"
                type="button"
                role="tab"
                :aria-controls="`collision-${data.persistentID}`"
                aria-selected="false"
              >
                Collision 🧱
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                :id="`glue-tab-${data.persistentID}`"
                data-bs-toggle="tab"
                :data-bs-target="`#glue-${data.persistentID}`"
                type="button"
                role="tab"
                :aria-controls="`glue-${data.persistentID}`"
                aria-selected="false"
              >
                C-Foam 💦
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              :id="`healt-${data.persistentID}`"
              role="tabpanel"
              :aria-labelledby="`healt-tab-${data.persistentID}`"
            >
              Healt
            </div>
            <div
              class="tab-pane fade"
              :id="`damage-${data.persistentID}`"
              role="tabpanel"
              :aria-labelledby="`damage-tab-${data.persistentID}`"
            >
              Damage
            </div>
            <div
              class="tab-pane fade"
              :id="`collision-${data.persistentID}`"
              role="tabpanel"
              :aria-labelledby="`collision-tab-${data.persistentID}`"
            >
              Collision aa
            </div>
            <div
              class="tab-pane fade"
              :id="`glue-${data.persistentID}`"
              role="tabpanel"
              :aria-labelledby="`glue-tab-${data.persistentID}`"
            >
              GLUE aa
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EnemyCard",

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