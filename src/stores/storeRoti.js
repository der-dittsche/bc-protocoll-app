import { defineStore, acceptHMRUpdate } from "pinia";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/stores/firebase.js";
import { useStoreAuth } from "@/stores/storeAuth.js";

let questionsCollectionRef;
let getQuestionsSnapshot = null;

export const useStoreQuestions = defineStore("storeQuestions", {
  state: () => {
    return {
      questions: [],
      questionsLoaded: false,
    };
  },
  actions: {
    initUser() {
      const storeAuth = useStoreAuth();

      questionsCollectionRef = collection(db, "bc_roti");
      this.getQuestions();
    },
    async getQuestions() {
      console.log("Hallo Welt");
      this.questionsLoaded = false;
      getQuestionsSnapshot = onSnapshot(
        questionsCollectionRef,
        (querySnapshot) => {
          let questions = [];
          querySnapshot.forEach((doc) => {
            let question = {
              id: doc.id,
              classes: doc.data().classes,
            };
            questions.push(question);
          });
          this.questions = questions;
          this.questionsLoaded = true;
        }
      );
    },
    async addQuestion(NewQuestionContent) {
      let currentDate = new Date().getTime(),
        date = currentDate.toString();

      await addDoc(questionsCollectionRef, {
        content: NewQuestionContent,
        date,
      });
    },
    async deleteQuestion(idToDelete) {
      await deleteDoc(doc(questionsCollectionRef, idToDelete));
    },
    async updateQuestion(id, content) {
      await updateDoc(doc(questionsCollectionRef, id), {
        content,
      });
    },
    clearQuestions() {
      this.questions = [];
      if (getQuestionsSnapshot) getQuestionsSnapshot(); // unsubscribe from any listener
    },
  },
  getters: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreQuestions, import.meta.hot));
}
