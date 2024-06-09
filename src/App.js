import "./App.css";
import TabelaMajstora from "./TabelaMajstora";
import UnosNovogMajstora from "./UnosNovogMajstora";
import { useState } from "react";

function App() {
  //aktivna stranica moze biti pregled-svih ili dodavanje-novog
  const [aktivnaStranica, setAktivnaStranica] = useState("pregled-svih");

  return (
    <div className="App">
      <h1>eMajstori</h1>
      <div className="button-container">
        <button onClick={() => setAktivnaStranica("pregled-svih")}>
          Pregled svih majstora
        </button>
        <button onClick={() => setAktivnaStranica("dodavanje-novog")}>
          Dodavanje novog majstora
        </button>
      </div>
      <div className="table-container">
        {aktivnaStranica === "pregled-svih" ? <TabelaMajstora /> : <></>}
        {aktivnaStranica === "dodavanje-novog" ? <UnosNovogMajstora /> : <></>}
      </div>
    </div>
  );
}

export default App;
