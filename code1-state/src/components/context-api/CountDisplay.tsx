import { useCount } from "../../context";

export default function CountDisplay() {
  const { count } = useCount();

  console.log("CountDisplay 렌더링 되나요?");

  return <div>Count: {count}</div>;
}
