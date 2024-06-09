import React, { useEffect, useState } from "react";
import { dovuciMajstore } from "./apiService";
import DetaljiMajstora from "./DetaljiMajstora";
import "./TabelaMajstora.css";

function TabelaMajstora() {
  const [selektovaniMajstorId, setSelektovaniMajstorId] = useState(null);
  const [majstori, setMajstori] = useState([]);
  const [ucitavanje, setUcitavanje] = useState(false);

  useEffect(() => {
    async function getMajstori() {
      setUcitavanje(true);
      const majstori = await dovuciMajstore();
      setMajstori(majstori);
      setUcitavanje(false);
    }
    getMajstori();
  }, []);

  async function obrisiMajstora(id) {
    const odgovor = await fetch("http://localhost:5155/api/Majstori/" + id, {
      method: "DELETE",
    });

    if (odgovor.ok) {
      const noviMajstori = majstori.filter((majstor) => majstor.id !== id);
      setMajstori(noviMajstori);
    } else {
      console.log("Greska pri brisanju majstora");
    }
  }

  function prikaziDetalje(id) {
    setSelektovaniMajstorId(id);
  }
  if (ucitavanje) return <h1>Ucitavanje...</h1>;
  return (
    <div className="container">
      <h2>Pregled svih majstora</h2>
      <table className="tab">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Delatnost</th>
            <th>Opsirnije</th>
            <th>Obrisi</th>
          </tr>
        </thead>
        <tbody>
          {majstori.map((majstor) => (
            <tr key={majstor.id}>
              <td>{majstor.id}</td>
              <td>{majstor.ime}</td>
              <td>{majstor.prezime}</td>
              <td>{majstor.delatnost}</td>
              <td>
                <button onClick={() => prikaziDetalje(majstor.id)}>
                  Detalji
                </button>
              </td>
              <td>
                <button onClick={() => obrisiMajstora(majstor.id)}>
                  Obrisi
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <DetaljiMajstora id={selektovaniMajstorId} />
    </div>
  );
}

export default TabelaMajstora;
