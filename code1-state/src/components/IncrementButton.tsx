import { useStore } from "../store";
// import { useShallow } from "zustand/react/shallow";

export default function IncrementButton() {
  const handleClick = useStore((state) => state.increment); // 특정 값만 구독
  // const { increment } = useStore() count 가 변하면 불필요한 리랜더링 발생

  // 여러값 가져올 때 useShallow 이용
  // const { increment } = useStore(
  //   useShallow((state) => ({
  //     increment: state.increment,
  //   }))
  // );

  console.log("IncrementButton가 렌더링 되나요?");

  return (
    <button onClick={handleClick} className={"bg-blue-300 p-2 rounded-md"}>
      Increment
    </button>
  );
}
