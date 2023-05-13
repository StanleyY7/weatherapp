import styles from "./Card.module.scss";

const Card = () => {
  return (
    <>
      <section className={styles.Card__wrapper}>
        <div className={styles.Card__container}>
          <p>Hello World!</p>
        </div>
      </section>
    </>
  );
};

export default Card;
