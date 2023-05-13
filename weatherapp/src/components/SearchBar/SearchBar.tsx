import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <>
      <section className={styles.SearchBar__wrapper}>
        <input
          type="text"
          required
          maxLength={21}
          placeholder="Search for a city"
        ></input>
        <button>Submit</button>
      </section>
    </>
  );
};

export default SearchBar;
