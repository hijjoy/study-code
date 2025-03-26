import CountDisplay from "../components/context-api/CountDisplay";
import IncrementButton from "../components/context-api/IncrementButton";
import { CountProvider } from "../context";

export default function ContextApi() {
  return (
    <CountProvider>
      <div className="flex flex-col justify-center items-center my-10 gap-2">
        <h1>ContextApi</h1>
        <CountDisplay />
        <IncrementButton />
      </div>
    </CountProvider>
  );
}
