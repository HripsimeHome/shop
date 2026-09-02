"use client";
import { useRouter } from "next/navigation";
// useRouter()
//   ↓
// переход через JavaScript

export default function Login() {
  const router = useRouter();
  const isLoggedIn = true;

  function handleLogin() {
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  }
  // 🔥 Вот почему useRouter() нужен там, где навигация зависит от логики программы.
  return (
    <div>
      <h2>Ths is login page</h2>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
