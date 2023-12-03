"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie, getCookie } from "cookies-next";

export default function App() {
  const [data, setData] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (getCookie("sign")) {
      router.push("/play?username=" + getCookie("sign"));
    }
  }, []);
  function handleUserName(event) {
    setData({ ...data, username: event.target.value });
  }
  function handlePassword(event) {
    setData({ ...data, password: event.target.value });
  }
  function handleLogin(res) {
    if (res.length === 0) {
      console.log("zl");
    } else if (res[0].username === data.username) {
      if (res[0].password === data.password) {
        setCookie("sign", data.username);
        router.push("/play?username=" + data.username);
      } else {
        console.log("zl");
      }
    }
  }
  function handleSubmit() {
    if (data.username === undefined || data.username === "") {
      console.log("username requered");
    } else if (data.password === undefined || data.password === "") {
      console.log("password requered");
    } else {
      fetch("http://localhost:8080/user/" + data.username)
        .then((res) => res.json())
        .then((response) => handleLogin(response));
    }
  }
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw]">
      <div className="backdrop-blur-lg flex flex-col gap-[25px] w-[90%] h-[45%] justify-center min-[500px]:w-[400px] min-[500px]:h-[30%] items-center rounded-[30px]">
        <h1 className="text-[25px]">Login</h1>
        <input
          spellCheck={false}
          onChange={handleUserName}
          className="bg-[transparent] px-[10px] py-[5px] border-white border-2 rounded-md "
          placeholder="username"
        />
        <input
          spellCheck={false}
          onChange={handlePassword}
          className="bg-[transparent] px-[10px] py-[5px] border-white border-2 rounded-md "
          placeholder="password"
        />
        <button
          onClick={handleSubmit}
          className="bg-[transparent] h-[40px] w-[80px] border-white border-2 rounded-md"
        >
          submit
        </button>
        <button
          onClick={() => {
            router.push("/createAccount");
          }}
        >
          Dont have an account?
        </button>
      </div>
    </div>
  );
}
