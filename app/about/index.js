import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();
  return (
    <div
      style={{
        margin: "-10px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
      className="home1"
    >
      <div>
        <h1>Game Rules</h1>
        <p className="abt">match the cards by clicking on them</p>
        <div>
          <p>About Hard Mode</p>
          <p className="abt">· 12 cards</p>
          <p className="abt">· 5 seconds to memorize</p>
          <p>About Easy Mode</p>
          <p className="abt">· 8 cards</p>
          <p className="abt">· 8 seconds to memorize</p>
        </div>
      </div>
      <div>
        <h1>Made By Ariuka</h1>
        <p className="abt">stoobid mf who lives in a trash can</p>
        <p>Apache License</p>
        <p style={{ width: "300px" }} className="abt">
          Copyright 2023 Ariuka Licensed under the Apache License, Version 2.0
          (the "License"); you may not use this file except in compliance with
          the License. You may obtain a copy of the License at
          http://www.apache.org/licenses/LICENSE-2.0 Unless required by
          applicable law or agreed to in writing, software distributed under the
          License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
          CONDITIONS OF ANY KIND, either express or implied. See the License for
          the specific language governing permissions and limitations under the
          License.
        </p>
      </div>
      <div className="play" onClick={() => router.push("/")}>
        home
      </div>
    </div>
  );
}
