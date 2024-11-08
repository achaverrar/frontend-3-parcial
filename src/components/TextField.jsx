import React from "react";
import styles from "./TextField.module.css";

const TextField = ({ id, name, value, onChange, label, placeholder }) => {
  return (
    <div className={styles.textfield}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
