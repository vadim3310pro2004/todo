import { useState } from "react";
import Nav from "./components/nav/Nav";
import Background from "./components/background/Background";

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