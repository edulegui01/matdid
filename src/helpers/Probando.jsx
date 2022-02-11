import React, { useState } from "react";


const defaultState = {
  nombre: "",
  email: "",
  telefono: "",
  area: ""
};

function Row({ onChange, onRemove, nombre, email, telefono, area }) {
  return (
    <div>
      <input
        value={nombre}
        onChange={e => onChange("nombre", e.target.value)}
        placeholder="Nombre del contacto"
      />
      <input
        placeholder="Email"
        value={email}
        onChange={e => onChange("email", e.target.value)}
      />
      <input
        placeholder="Teléfono"
        value={telefono}
        onChange={e => onChange("telefono", e.target.value)}
      />
      <input
        placeholder="Área o Sector"
        value={area}
        onChange={e => onChange("area", e.target.value)}
      />
      <button onClick={onRemove}>Eliminar</button>
    </div>
  );
}

export default function App() {
  const [rows, setRows] = useState([defaultState]);

  const handleOnChange = (index, name, value) => {
    const copyRows = [...rows];
    copyRows[index] = {
      ...copyRows[index],
      [name]: value
    };
    setRows(copyRows);
  };

  const handleOnAdd = () => {
    setRows(rows.concat(defaultState));
  };

  const handleOnRemove = index => {
    const copyRows = [...rows];
    copyRows.splice(index, 1);
    setRows(copyRows);
  };

  return (
    <div className="App">
      {rows.map((row, index) => (
        <Row
          {...row}
          onChange={(name, value) => handleOnChange(index, name, value)}
          onRemove={() => handleOnRemove(index)}
          key={index}
        />
      ))}
      <button onClick={handleOnAdd}>Agregar</button>
    </div>
  );
}
