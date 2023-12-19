import { useState } from "react";
import Nav from "./components/nav/Nav";
import Background from "./components/background/Background";

export default function App() {
  const [waves, setWaves] = useState([]);

  return (
    <>
      <Nav />
      <Background waves={waves} />
    </>
  );
};