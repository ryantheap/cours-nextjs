import Posts from "@/components/Header/Posts/Posts";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Suspense fallback={<p>Chargement en cours...</p>}>
        <Posts />
      </Suspense>
    </div>
  );
}
