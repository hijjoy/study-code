import CountDisplay from "../components/CountDisplay.tsx";
import IncrementButton from "../components/IncrementButton.tsx";

export default function Zustand() {
  return (
    <div className={"flex flex-col justify-center items-center my-10 gap-2"}>
      <CountDisplay />
      <IncrementButton />
    </div>
  );
}
