import { atom } from "recoil";

export const counterState = atom({
  key: "counterState", // 고유한 key
  default: 0, // 초기값
});
