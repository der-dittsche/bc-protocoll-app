<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active': !register }">
          <a @click.prevent="register = flase">Login</a>
        </li>
        <li :class="{ 'is-active': register }">
          <a @click.prevent="register = true">Register</a>
        </li>
      </ul>
    </div>
    <div class="card auth-form">
      <div class="card-content">
        <div class="title has-text-centered">{{ formTitle }}</div>
        <div class="content">
          <form @submit.prevent="onSubmit">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  v-model="credentials.email"
                  class="input"
                  type="email"
                  data-cy="login-email-input"
                  placeholder="e.g. alexsmith@gmail.com"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  v-model="credentials.password"
                  class="input"
                  type="password"
                  data-cy="login-password-input"
                  placeholder="enter your password"
                />
              </div>
            </div>
            <div class="field is-grouped is-grouped-right">
              <p class="control">
                <button class="button is-primary" data-cy="login-submit-button">
                  {{ formTitle }}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { useStoreAuth } from "@/stores/storeAuth.js";

const register = ref(false);
const storeAuth = useStoreAuth();

const formTitle = computed(() => {
  return register.value ? "Register" : "Login";
});

const credentials = reactive({
  email: "",
  password: "",
});
const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    alert("Please enter your email and password");
  } else {
    if (register.value) {
      storeAuth.registerUser(credentials);
    } else {
      storeAuth.loginUser(credentials);
    }
  }
};
</script>

<style>
.auth-form {
  max-width: 400px;
  margin: auto;
}
</style>
