import styles from "./styles.module.css";

function Card({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.site}>
        <img src={"/assets/startingScreen.png"} />
      </div>
    </div>
  );
}

export default Card;
