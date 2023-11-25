import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function App() {
  const params = useSearchParams();
  const router = useRouter();
  return (
    <div className="outer">
      <div>
        <h1>solving time: {params} seconds</h1>
        <p>good job lol</p>
        <div className="play" onClick={() => router.push("/")}>
          play again
        </div>
      </div>
    </div>
  );
}
