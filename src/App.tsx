import { useState } from "react";
import Form from "./components/Form";
import travelMen from "./assets/men_walking.jpeg";
function App() {
  return (
    <div className="bg-zinc-300 min-h-screen w-full flex flex-col items-center justify-center gap-6 pt-8 ">
      <h1 className="text-4xl text-emerald-900 font-bold">Travel Guide</h1>
      <div className="flex gap-5 items-center bg-white p-7 md:w-3xl md:p-0 md:h-[750px] h-[650] w-auto px-4">
        <img
          className="hidden md:block h-full w-[400px] object-cover "
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
