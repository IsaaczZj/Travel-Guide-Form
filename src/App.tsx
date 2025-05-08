import { useState } from "react";
import Form from "./components/Form";
import travelMen from "./assets/men_walking.jpeg";
function App() {
  return (
    <div className="bg-zinc-300 min-h-screen w-full flex flex-col items-center justify-center gap-6 pt-8">
      <h1 className="text-4xl text-emerald-900 font-bold">Travel Guide</h1>
      <div className="flex gap-5 items-center bg-white p-5 sm:w-3xl sm:p-0 h-[750px] w-[450px]">
        <img
          className="hidden sm:block h-full w-[400px] object-cover "
          src={travelMen}
          alt=""
        />
        <div className="flex items-center justify-center w-full p-5 -ml-3">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
