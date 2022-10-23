import { createRouter, createWebHashHistory } from "vue-router";
import { useStoreAuth } from "@/stores/storeAuth.js";
import ViewNotes from "@/Pages/ViewNotes.vue";
import ViewStats from "@/Pages/ViewStats.vue";
import ViewEditNote from "@/Pages/ViewEditNote.vue";
import ViewAuth from "@/Pages/ViewAuth.vue";

const routes = [
  {
    path: "/",
    name: "notes",
    component: ViewNotes,
  },
  {
    path: "/stats",
    name: "stats",
    component: ViewStats,
  },
  {
    path: "/editNote/:id",
    name: "editnote",
    component: ViewEditNote,
  },
  {
    path: "/auth",
    name: "auth",
    component: ViewAuth,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  const storeAuth = useStoreAuth();
  if (!storeAuth.user.id && to.name !== "auth") {
    return { name: "auth" };
  }
  if (storeAuth.user.id && to.name !== "auth") {
    return true;
  }
});

export default router;
