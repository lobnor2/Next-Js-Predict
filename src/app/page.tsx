"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-5xl mb-5">
        <h1>Enter Your Name</h1>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-black px-3 py-2 text-xl my-3 outline-none"
          placeholder="Type your first name..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          type="submit"
          className="border border-white ml-2 py-2 text-lg px-2 cursor-pointer "
        >
          Predict Data
        </button>
      </form>
    </div>
  );
}
