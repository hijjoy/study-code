import { useStore } from "../store";

export default function CountDisplay() {
  const count = useStore((state) => state.count);

  console.log("CountDisplay 렌더링 되나요?");

  return <div className={"text-xl"}>{count}</div>;
}
