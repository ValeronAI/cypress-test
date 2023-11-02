<script setup>
  import { ref } from "vue";

  const showFirstElement = ref(true);

  setTimeout(() => (showFirstElement.value = false), 1500);
</script>

<template>
  <ul>
    <li v-if="showFirstElement" data-cypress-id="test-element-wrapper">
      <span data-cypress-id="test-element">test item</span>
    </li>
    <li data-cypress-id="test-element-wrapper">
      <span data-cypress-id="test-element">test item</span>
    </li>
    <li data-cypress-id="test-element-wrapper">
      <span data-cypress-id="test-element">test item</span>
    </li>
  </ul>
</template>
