import Card from "../components/Card/Card";
import SearchBar from "../components/SearchBar/SearchBar";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <>
      <div className={styles.MainPage__wrapper}>
        <h1 className={styles.title}>Weather App</h1>
        <SearchBar />
        <Card />
      </div>
      <div className={styles.wrapper}>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
      </div>
    </>
  );
};

export default MainPage;
