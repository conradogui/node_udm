import api from "../../../utils/api.jsx";
import styles from "./Dashboard.module.css";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import RoundedImage from "../../layout/RoundedImage.jsx";

/*hooks */
import useFlashMessage from "../../../hooks/useFlashMessage.jsx";

const MyPets = () => {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get("/pets/mypets", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(response.data.pets);
      });
  }, [token]);

  async function removePet(id) {
    let msgType = "success";
    const data = await api
      .delete(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        const updatedPet = pets.filter((pet) => pet._id !== id);
        setPets(updatedPet);
        return response.data;
      })
      .catch((err) => {
        msgType = "error";
        return err.response.data;
      });
    setFlashMessage(data.message, msgType);
  }

  async function concludeAdoption(id) {
    let msgType = "success";

    const data = await api
      .patch(`/pets/conclude/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        msgType = "error";
        return err.response.data;
      });
    setFlashMessage(data.message, msgType);
  }

  return (
    <section>
      <div className={styles.petslist_header}>
        <h1>Meus Pets</h1>
        <Link to="/pet/add">Cadastrar Pet</Link>
      </div>
      <div className={styles.petslist_container}>
        {pets.length > 0 &&
          pets.map((pet, index) => (
            <div className={styles.petlist_row} key={index}>
              <RoundedImage
                src={`${import.meta.env.VITE_APP_API}/images/pets/${
                  pet.images[0]
                }`}
                alt={pet.name}
                width="px75"
              />
              <span className="bold">{pet.name}</span>
              <div className={styles.actions}>
                {pet.avaliable ? (
                  <>
                    {pet.adopter && (
                      <button
                        className={styles.conclude_btn}
                        onClick={() => {
                          concludeAdoption(pet._id);
                        }}
                      >
                        Concluir adoção
                      </button>
                    )}
                    <Link to={`/pet/edit/${pet._id}`}>Editar</Link>
                    <button
                      onClick={() => {
                        removePet(pet._id);
                      }}
                    >
                      Excluir
                    </button>
                  </>
                ) : (
                  <p>Pet já adotado</p>
                )}
              </div>
            </div>
          ))}
        {pets.length === 0 && <p>Não há pets cadastrados</p>}
      </div>
    </section>
  );
};

export default MyPets;
