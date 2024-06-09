// UnosNovogMajstora.js

import React, { useState } from "react";
import { dodajMajstora } from "./apiService";
import "./UnosNovogMajstora.css"; // Uvoz CSS-a

function UnosNovogMajstora() {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [delatnost, setDelatnost] = useState("");
  const [error, setError] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();

    const noviMajstor = {
      ime: ime,
      prezime: prezime,
      delatnost: delatnost,
    };

    try {
      await dodajMajstora(noviMajstor);
      setIme("");
      setPrezime("");
      setDelatnost("");
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div className="form-container">
      <h2>Unos novog majstora</h2>
      {error !== null ? <p className="error">{error}</p> : <></>}
      <form onSubmit={onSubmit}>
        <label>Ime:</label>
        <input
          type="text"
          value={ime}
          onChange={(e) => setIme(e.target.value)}
        />
        <br />
        <label>Prezime:</label>
        <input
          type="text"
          value={prezime}
          onChange={(e) => setPrezime(e.target.value)}
        />
        <br />
        <label>Delatnost:</label>
        <input
          type="text"
          value={delatnost}
          onChange={(e) => setDelatnost(e.target.value)}
        />
        <br />
        <button type="submit">Dodaj majstora</button>
      </form>
    </div>
  );
}

export default UnosNovogMajstora;
