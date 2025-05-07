import { useState } from "react";
import Form from "./components/Form";

function App() {
  return (
    <div className="bg-zinc-200 min-h-screen w-full flex flex-col items-center gap-6 pt-8">
      <h1 className="font-bold text-3xl">Formulario</h1>
      <Form />
    </div>
  );
}

export default App;
