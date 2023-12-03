"use client";

import { useRouter } from "next/navigation";
import { setCookie, getCookie } from "cookies-next";

export default function App() {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
      className="h-[100vh] w-[100vw] flex items-center justify-center"
    >
      <button
        style={getCookie("sign") ? { display: "none" } : { display: "flex" }}
        onClick={() => {
          router.push("/login");
        }}
        className="absolute top-[8px] right-[16px] text-[25px] flex h-[50px] w-[100px] justify-center backdrop-blur-lg rounded-lg bg-[transparent] items-center hover:bg-[#696969] transition-all duration-300 border-[white] border-2"
      >
        <p>login</p>
      </button>
      <button
        style={getCookie("sign") ? { display: "flex" } : { display: "none" }}
        onClick={() => {
          router.push("/account");
        }}
        className="absolute top-[8px] right-[16px] text-[25px] flex h-[50px] w-[100px] justify-center backdrop-blur-lg rounded-lg bg-[transparent] items-center hover:bg-[#696969] transition-all duration-300 border-[white] border-2"
      >
        <p>{getCookie("sign")}</p>
      </button>
      <div className="backdrop-blur-xl p-[10px] rounded-[20px]">
        <div className="text-[25px] flex gap-[10px] flex-col justify-center items-center">
          <h1>Game Rules</h1>
          <p className="abt">match the cards by clicking on them</p>
          <p>About</p>
          <p className="abt">· 5 seconds to memorize</p>
          <p>customize:</p>
          <p className="abt">warning: customized cards cannot have rank</p>
          <h1>Credits:</h1>
          <p className="abt">stoobid mf who lives in a trash can</p>
          <div className="abt">
            msexpensive discord:{" "}
            <button
              className="text-[white]"
              onClick={() => {
                navigator.clipboard.writeText("expensiveixia_72613");
              }}
            >
              expensiveixia_72613
            </button>
          </div>
          <div className="abt">
            yumi discord:{" "}
            <button
              className="text-[white]"
              onClick={() => {
                navigator.clipboard.writeText("yumixchu#1129");
              }}
            >
              yumixchu#1129
            </button>
          </div>
          <div className="abt">
            RayReii discord:{" "}
            <button
              className="text-[white]"
              onClick={() => {
                navigator.clipboard.writeText("Reii#7498");
              }}
            >
              Reii#7498
            </button>
          </div>
          <div className="abt">
            Coffee discord:{" "}
            <button
              className="text-[white]"
              onClick={() => {
                navigator.clipboard.writeText("Coffingo#2403");
              }}
            >
              Coffingo#2403
            </button>
          </div>
          <p className="abt"></p>
          <button
            className="border-white border-2 p-[10px] text-[16px] w-[70px] rounded-[10px] hover:bg-[#3d3d3d] transition-all duration-300"
            onClick={() => router.push("/")}
          >
            home
          </button>
        </div>
      </div>
    </div>
  );
}
