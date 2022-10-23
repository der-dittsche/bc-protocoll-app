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
      questionsCollectionRef = collection(db, "bc_roti");
      this.getQuestions();
    },
    async getQuestions() {
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
            console.log("Hallo");
            questions.push(question);
          });
          setTimeout(() => {
            this.questions = questions;
            this.questionsLoaded = true;
          }, 200);
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
