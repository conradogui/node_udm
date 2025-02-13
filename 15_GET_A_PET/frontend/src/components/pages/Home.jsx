import api from "../../utils/api.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Home.module.css";

const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("/pets").then((response) => {
      setPets(response.data.pets);
    });
  }, []);
  return (
    <section>
      <div className={styles.pet_home_header}>
        <h1>Adote um Pet</h1>
        <p>Veja os detalhes de cada um e conheça o tutor deles</p>
      </div>
      <div className={styles.pet_container}>
        {pets.length > 0 &&
          pets.map((pet, index) => (
            <div key={index} className={styles.pet_card}>
              <div
                style={{
                  backgroundImage: `url(${import.meta.env.VITE_APP_API}/images/pets/${pet.images[0]})`,
                }}
                className={styles.pet_card_image}
              ></div>
              <h3>{pet.name}</h3>
              <p>
                <span className="bold">Peso:</span> {pet.weight}
              </p>
              {pet.avaliable ? (
                <Link to={`pet/${pet._id}`}>Mais detalhes</Link>
              ) : (
                <p className={styles.adopted_text}>Pet já adotado</p>
              )}
            </div>
          ))}
        {pets.length === 0 && <p>Não exitem pets disponíveis no momento!</p>}
      </div>
    </section>
  );
};

export default Home;
