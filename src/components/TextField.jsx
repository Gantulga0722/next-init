import React from "react";
import styles from "@/styles/components/TextField.module.css";

export function TextField() {
  return (
    <label htmlFor="">
      <p className={styles.test}>Some Text</p>
      <input type="text" className={styles.inputField} />
    </label>
  );
}
