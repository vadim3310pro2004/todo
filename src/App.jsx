import { useState } from "react";
import Nav from "./components/nav/Nav";
import Background from "./components/background/Background";

export default function App() {
  const [waves, setWaves] = useState([]);
  const addWave = (newWave) => setWaves([...waves, newWave]);
  const removeWave = () => setWaves(waves.slice(0, -1));

  return (
    <>
      <Nav addWave={addWave} removeWave={removeWave}/>
      <Background waves={waves} />
    </>
  );
};