import styles from "../styles/homeComponents/Searchbar.module.scss";

import {Link} from "react-router-dom";
import {FiSearch} from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className={styles.menu}>
        <div className={styles.liner}>
            <div className={styles.searchContainer}>
                <FiSearch/>
                <input type="text" placeholder="Search"/>
            </div>
            <div className={styles.menuLink}>
                <Link to="wallet">Wallet</Link>
            </div>
            <div className={styles.menuLink}>
                <Link to="settings">Settings</Link>
            </div>
        </div>
    </div>
  );
};

export default SearchBar