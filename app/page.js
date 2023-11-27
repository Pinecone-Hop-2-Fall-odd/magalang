"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCookies } from "react-cookie";
export default function App() {
  const router = useRouter();
  const [cookie, setCookies] = useCookies();
  useState(() => {
    setCookies("photo", [
      {
        path: "/images/photo1.jpg",
        clicked: true,
        id: Math.floor(Math.random() * 100000),
        solved: false,
      },
      {
        path: "/images/photo2.jpg",
        clicked: true,
        id: Math.floor(Math.random() * 100000),
        solved: false,
      },
      {
        path: "/images/photo3.jpg",
        clicked: true,
        id: Math.floor(Math.random() * 100000),
        solved: false,
      },
      {
        path: "/images/photo4.jpg",
        clicked: true,
        id: Math.floor(Math.random() * 100000),
        solved: false,
      },
      {
        path: "/images/photo5.jpg",
        clicked: true,
        id: Math.floor(Math.random() * 100000),
        solved: false,
      },
      {
        path: "/images/photo6.jpg",
        clicked: true,
        id: Math.floor(Math.random() * 100000),
        solved: false,
      },
      {
        path: "/images/photo1.jpg",
        clicked: true,
        id: Math.floor(Math.random() * 100000),
        solved: false,
      },
      {
        path: "/images/photo2.jpg",
        clicked: true,
        id: Math.floor(Math.random() * 100000),
        solved: false,
      },
      {
        path: "/images/photo3.jpg",
        clicked: true,
        id: Math.floor(Math.random() * 100000),
        solved: false,
      },
      {
        path: "/images/photo4.jpg",
        clicked: true,
        id: Math.floor(Math.random() * 100000),
        solved: false,
      },
      {
        path: "/images/photo5.jpg",
        clicked: true,
        id: Math.floor(Math.random() * 100000),
        solved: false,
      },
      {
        path: "/images/photo6.jpg",
        clicked: true,
        id: Math.floor(Math.random() * 100000),
        solved: false,
      },
    ]);
  });
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw]">
      <div className="backdrop-blur h-[300px] w-[400px] flex justify-center items-center flex-col rounded-[10px] gap-[25px]">
        <h1 className="text-[30px]">select mode</h1>
        <div className="flex gap-[10px]">
          <button
            onClick={() => router.push("/play?mode=hard")}
            className="border-2 border-white px-[15px] rounded-[10px] py-[5px]  transition-all duration-300 hover:bg-[#3d3d3d]"
          >
            Hard
          </button>
          <button
            onClick={() => router.push("/play?mode=easy")}
            className="border-2 border-white px-[15px] rounded-[10px] py-[5px] transition-all duration-300 hover:bg-[#3d3d3d]"
          >
            easy
          </button>
        </div>

        <a onClick={() => router.push("/about")}>about</a>
      </div>
    </div>
  );
}
