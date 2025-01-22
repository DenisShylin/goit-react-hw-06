import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Пошук контактів..."
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
