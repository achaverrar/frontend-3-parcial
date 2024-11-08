import styles from "./Card.module.css";

//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
export const Card = ({ name, color }) => {
  return (
    <article className={styles.card}>
      <p>Hola, {name}</p>
      <p>Sabemos que tu color favorito es</p>
      <div className={styles.preview} style={{ backgroundColor: color }}>
        {color}
      </div>
    </article>
  );
};
