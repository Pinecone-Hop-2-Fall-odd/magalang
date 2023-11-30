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
  }, []);
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw] relative">
      <button
        style={
          localStorage.getItem("sign")
            ? { display: "none" }
            : { display: "flex" }
        }
        onClick={() => {
          router.push("/login");
        }}
        className="absolute top-[8px] right-[16px] text-[25px] flex h-[50px] w-[100px] justify-center backdrop-blur-lg rounded-lg bg-[#323232] items-center hover:bg-[#696969] transition-all duration-300"
      >
        <p>login</p>
      </button>
      <button
        style={
          localStorage.getItem("sign")
            ? { display: "flex" }
            : { display: "none" }
        }
        onClick={() => {
          router.push("/account");
        }}
        className="absolute top-[8px] right-[16px] text-[25px] flex h-[50px] w-[100px] justify-center backdrop-blur-lg rounded-lg bg-[#323232] items-center hover:bg-[#696969] transition-all duration-300"
      >
        <p>{localStorage.getItem("sign")}</p>
      </button>
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
