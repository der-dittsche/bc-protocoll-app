<template>
  <AddEditNote v-model="noteContent" ref="addEditNoteRef" label="Edit Note">
    <template #addbutton>
      <button @click="$router.back()" class="button is-link is-light mr-5">
        cancel
      </button>
      <button
        class="button is-link has-background-success"
        :disabled="!noteContent"
        @click="updateNote"
      >
        Save Note
      </button>
    </template>
  </AddEditNote>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes.js";

const route = useRoute();
const router = useRouter();

const storeNotes = useStoreNotes();

const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id);

const updateNote = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>
