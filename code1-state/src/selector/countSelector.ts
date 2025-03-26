import { selector } from "recoil";
import { counterState } from "../atoms/counterAtom";

export const incrementSelector = selector({
  key: "incrementSelector",
  get: ({ get }) => get(counterState),
  set: ({ get, set }) => {
    const current = get(counterState);
    set(counterState, current + 1);
  },
});
