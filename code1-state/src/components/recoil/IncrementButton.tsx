import { useSetRecoilState } from "recoil";
import { counterState } from "../../atoms/counterAtom";

export default function IncrementButton() {
  console.log("IncrementButton");
  // const [count, setCount] = useRecoilState(counterState);
  const setCount = useSetRecoilState(counterState);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return <button onClick={increment}>증가</button>;
}
