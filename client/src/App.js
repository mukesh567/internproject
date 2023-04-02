import Navbar from './components/nav/Navbar';
import TableData from './components/table/TableData';
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("white");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "dark";
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <TableData mode={mode} />
    </>
  );
}

export default App;
