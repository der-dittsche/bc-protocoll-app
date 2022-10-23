<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Add a new Note"
    >
      <template #addbutton>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add a Note
        </button>
      </template>
    </AddEditNote>

    <progress
      v-if="!storeNotes.notesLoaded"
      class="progress is-small is-success"
      max="100"
    />
    <template v-else>
      <NoteCollection
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
      />
      <div
        v-if="!storeNotes.notes.length"
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
      >
        No notes here yet...
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NoteCollection from "@/components/Notes/NoteCollection.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes.js";
import { useWatchCharacters } from "@/use/useWatchCharacters.js";

const newNote = ref("");
const addEditNoteRef = ref(null);
const storeNotes = useStoreNotes();

const addNote = () => {
  storeNotes.addNote(newNote.value);

  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};

useWatchCharacters(newNote, 250);
</script>
