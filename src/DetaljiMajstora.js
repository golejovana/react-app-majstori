import { useEffect, useState } from "react";
import { dovuciDetaljeMajstora } from "./apiService";

function DetaljiMajstora({ id }) {
  const [majstor, setMajstor] = useState(null);

  useEffect(() => {
    async function dovuciMajstora() {
      const majstor = await dovuciDetaljeMajstora(id);
      setMajstor(majstor);
    }

    if (id !== null) dovuciMajstora();
  }, [id]);

  if (id == null || majstor == null) return <></>;

  return (
    <div>
      <h2>Detalji majstora</h2>
      <p>ID: {majstor.id}</p>
      <p>Ime: {majstor.ime}</p>
      <p>Prezime: {majstor.prezime}</p>
      <p>Delatnost: {majstor.delatnost}</p>
    </div>
  );
}

export default DetaljiMajstora;
