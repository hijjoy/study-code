import { useSetRecoilState } from "recoil";

// import { counterState } from "../../atoms/counterAtom";
import { incrementSelector } from "../../selector/countSelector";

export default function IncrementButton() {
  console.log("IncrementButton");
  // const [count, setCount] = useRecoilState(counterState);
  // const setCount = useSetRecoilState(counterState);

  // const increment = () => {
  //   setCount((prev) => prev + 1);
  // };

  const increment = useSetRecoilState(incrementSelector);

  return <button onClick={() => increment(1)}>증가</button>;
}
