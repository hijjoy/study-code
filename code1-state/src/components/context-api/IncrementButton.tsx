import { useCount } from "../../context";

export default function IncrementButton() {
  const { addOne } = useCount();

  console.log("IncrementButton가 렌더링 되나요?");

  return (
    <button onClick={addOne} className={"bg-red-300 p-2 rounded-md"}>
      Increment
    </button>
  );
}
