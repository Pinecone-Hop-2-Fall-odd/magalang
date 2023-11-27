"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function App() {
  const params = useSearchParams();
  const router = useRouter();
  return (
    <div className="outer flex justify-center items-center h-[100vh] w-[100vw]">
      <div className="backdrop-blur flex justify-center items-center h-[400px] w-[auto] flex-col gap-[20px] text-[25px] p-[20px] rounded-lg ">
        <h1>solving time: {params} seconds</h1>
        <p>good job lol</p>
        <button
          className="border-2 border-white p-[10px] rounded-[10px] hover:bg-[#3d3d3d] transition-all duration-300"
          onClick={() => router.push("/")}
        >
          play again
        </button>
      </div>
    </div>
  );
}
