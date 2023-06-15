import React from "react";
import styles from "./Search.module.scss";
import { MdClose } from "react-icons/md";
import { SearchContext } from "../../App";

const Search = () => {
  const inputRef = React.useRef();
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  const onClickClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  }

  return (
    <div className={styles.block}>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.root}
        placeholder="Поиск товаров..."
      />
      {searchValue && (
        <MdClose onClick={onClickClear} className={styles.icon} />
      )}
    </div>
  );
};

export default Search;
