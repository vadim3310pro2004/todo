import { useState } from "react";
import Background from "./components/Background";
import Nav from "./components/Nav";

export default function App() {
  const [waves, setWaves] = useState(0);
  const addWave = () => setWaves(waves + 1);
  const removeWave = () => setWaves(waves - 1);

  return (
    <>
      <Nav addWave={addWave} removeWave={removeWave}/>
      <Background waves={waves} />
    </>
  );
};