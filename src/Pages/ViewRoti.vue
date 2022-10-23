<template>
  <h1>Protocol for this Day</h1>
  <div class="control">
    <button class="button is-primary">Start</button>
  </div>
  <div class="card p-5 mb-5">
    <h2>Choose your Class</h2>
    <div class="select">
      <select>
        <option v-for="question in storeQuestions.questions" :key="question.id">
          {{ question.classes }}
        </option>
      </select>
    </div>
  </div>
  <div class="card p-5 mb-5">
    <h1>Open Questions</h1>
    <textarea class="textarea" placeholder="Open Question" readonly></textarea>
    <button class="button is-primary">Solve</button>
    <textarea class="textarea" placeholder="Get the Answer"></textarea>
    <div class="control">
      <button class="button is-primary">Archiv</button>
    </div>
  </div>
  <div class="card p-5 mb-5">
    <div class="control">
      <button class="button is-primary">Shuffel a Moderator</button>
    </div>
  </div>
  <div class="card p-5 mb-5">
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Start the Day</a>
      <a href="#" class="card-footer-item">Live-Session</a>
      <a href="#" class="card-footer-item">End of Day with Roti</a>
    </footer>
    <table class="table">
      <thead>
        <tr>
          <th>Attendee</th>
          <th>is present</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Harald</td>
          <td>
            <label class="checkbox">
              <input type="checkbox" />
            </label>
          </td>
        </tr>
      </tbody>
    </table>
    <h1>New Question</h1>
    <textarea class="textarea" placeholder="Ask a Question"></textarea>
  </div>
</template>

<script setup>
import { useStoreQuestions } from "@/stores/storeRoti.js";

const storeQuestions = useStoreQuestions();
</script>
