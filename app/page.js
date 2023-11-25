"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function App() {
  const router = useRouter();

  function handleModeHard() {
    router.push("/play?mode=hard");
  }
  function handleModeEasy() {
    router.push("/play?mode=easy");
  }
  useEffect(() => {}, []);
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          flexDirection: "column",
        }}
        className="home"
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          to play select mode
        </div>
        <div className="home" style={{ width: "auto" }}>
          <div onClick={handleModeHard} className="play">
            hard mode
          </div>
          <div onClick={handleModeEasy} className="play">
            easy mode
          </div>
        </div>
        <div className="play" onClick={() => router.push("/about")}>
          about
        </div>
      </div>
    </div>
  );
}
