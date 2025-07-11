"user client";

import Image from "next/image";
import { getDatas } from "./action";

export default async function Home() {
  const data = await getDatas();
  
  return (
    <div>
      <h1>Data from action:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
