import React, { useState } from "react";
import { generateColor } from "../utils/colorGenerator";
import { isOldEnough, isValidName } from "../utils/validators";
import TextField from "./TextField";
import styles from "./Form.module.css";

const INITIAL_DATA = {
  name: "",
  birthdate: "",
};

export const Form = ({ onSuccess, onError, onReset }) => {
  const [formData, setFormData] = useState(INITIAL_DATA);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, birthdate } = formData;
    if (isValidName(name) && isOldEnough(birthdate, 3)) {
      const color = generateColor(name, birthdate);
      onSuccess(name, color);
    } else {
      onError("Por favor, verifica que la información sea correcta");
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_DATA);
    onReset();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Ingresa tu primer nombre"
          placeholder="Ingresa tu primer nombre"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          id="birthdate"
          name="birthdate"
          label="Ingresa tu fecha de nacimiento"
          placeholder="DD-MM-AAAA"
          value={formData.birthdate}
          onChange={handleChange}
        />
        <div className={styles.buttons}>
          <button type="submit">Enviar</button>
          <button type="reset" onClick={handleReset}>
            Reiniciar
          </button>
        </div>
      </form>
    </>
  );
};
