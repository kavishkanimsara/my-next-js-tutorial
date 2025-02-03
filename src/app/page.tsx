"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  // programitacally navigate to /product/1
  // useRouter is a hook that gives you access to the router object

  const router = useRouter();
  const handleClick = () => {
    router.push('/product/1');
    // router.back(); // go back to the previous page
    // router.forward(); // go forward to the next page
    // router.replace('/product/1'); // replace the current page with the new page
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
