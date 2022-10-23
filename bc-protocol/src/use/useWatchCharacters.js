import { watch } from "vue";

export function useWatchCharacters(valueToWatch, maxChars = 50) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length > maxChars) {
      alert(`Only ${maxChars} Characters allowed!`);
    }
  });
}
