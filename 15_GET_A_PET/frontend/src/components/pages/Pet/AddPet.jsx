import api from "../../../utils/api.jsx"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddPet.module.css";

/*Components */
import PetForm from "../../form/PetForm.jsx";

/*hooks */
import useFlashMessage from "../../../hooks/useFlashMessage.jsx"

const AddPet = () => {
  return (
    <section className={styles.addpet_header}>
      <div>
        <h1>Cadastre um pet</h1>
        <p>Depois ele ficará disponível para adoção</p>
      </div>
      <PetForm btnText="Cadastrar Pet"/>
    </section>
  );
};

export default AddPet;
