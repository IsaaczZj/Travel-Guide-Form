import { useState } from "react";
import Form from "./components/Form";
import travelMen from "./assets/men_walking.jpeg";
function App() {
  return (
    <div className="bg-zinc-300 min-h-screen w-full flex flex-col items-center justify-center gap-6 pt-8">
      <div className="flex gap-5 items-center bg-white w-3xl">
        <img
          className="h-[550px] w-[350px] object-cover"
          src={travelMen}
          alt=""
        />
        <div className="flex items-center justify-center w-full">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
