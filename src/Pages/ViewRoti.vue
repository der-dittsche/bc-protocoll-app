<template>
  <h1>Hallo Welt</h1>
  <div class="select">
    <select>
      <option v-for="question in storeQuestions.questions" :key="question.id">
        {{ question.classes }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { useStoreQuestions } from "@/stores/storeRoti.js";

const storeQuestions = useStoreQuestions();
</script>
