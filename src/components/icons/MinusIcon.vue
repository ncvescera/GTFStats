<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="w ? w : 30"
    :height="h ? h : 30"
    fill="currentColor"
    class="bi bi-dash"
    viewBox="0 0 16 16"
  >
    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
  </svg>
</template>

<script>
export default {
  name: "MinusIcon",
  props: ["w", "h"],
};
</script>