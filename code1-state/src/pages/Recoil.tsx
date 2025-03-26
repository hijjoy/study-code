import { RecoilRoot } from "recoil";
import Counter from "../components/recoil/Counter";
import IncrementButton from "../components/recoil/IncrementButton";

export default function Recoil() {
  return (
    <RecoilRoot>
      <div className="flex flex-col justify-center items-center my-10 gap-2">
        <h1>Recoil</h1>
        <Counter />
        <IncrementButton />
      </div>
    </RecoilRoot>
  );
}
