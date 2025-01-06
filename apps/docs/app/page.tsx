import { add } from "potion-core";

export default function Page() {
  return <h1 className="text-xl">{add(1, 2)}</h1>;
}
