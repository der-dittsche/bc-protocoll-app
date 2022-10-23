<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>No of Notes</td>
          <td>{{ storeNotes.totalNoteCount }}</td>
        </tr>
        <tr>
          <td>No of Character (of all Notes)</td>
          <td>{{ storeNotes.totalNoteCharacter }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="resumee"
      type="text"
      class="input"
      placeholder="Do you like what you see"
      v-autofocus
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes.js";
import { vAutofocus } from "@/directives/vAutofocus.js";
import { useWatchCharacters } from "@/use/useWatchCharacters.js";

const storeNotes = useStoreNotes();

const resumee = ref("");
useWatchCharacters(resumee);
</script>
