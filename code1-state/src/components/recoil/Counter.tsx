import { useRecoilValue } from "recoil";
import { counterState } from "../../atoms/counterAtom";

const Counter = () => {
  console.log("Counter");
  const count = useRecoilValue(counterState);

  return (
    <div>
      <h2>Recoil Count: {count}</h2>
    </div>
  );
};

export default Counter;
