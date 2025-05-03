import { Button } from "flowbite-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Link href={"/Dashboard"}>
        <Button>Click Me</Button>
      </Link>
    </div>
  );
}
