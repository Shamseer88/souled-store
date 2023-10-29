import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaMobileAlt, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <img src="/logo.png" alt="logo" />
    </Link>
  </div>
);

const downloadAppLink = (
  <span className={styles.cart}>
    <Link to="/">
      <FaMobileAlt size={18} />
      Download App
    </Link>
  </span>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <div className={styles.header}>
        {logo}

        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideMenu}
          ></div>
          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/men" className={activeLink}>
                MEN
              </NavLink>
            </li>
            <li>
              <NavLink to="/women" className={activeLink}>
                WOMEN
              </NavLink>
            </li>
            <li>
              <NavLink to="/kids" className={activeLink}>
                KIDS
              </NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink to="/order-history" className={activeLink}>
                Track Order
              </NavLink>
              <NavLink to="/contact" className={activeLink}>
                Contact Us
              </NavLink>
              <NavLink to="/login">
                <AiOutlineUser />
              </NavLink>
            </span>
            {downloadAppLink}
          </div>
        </nav>

        <div className={styles["menu-icon"]}>
          {downloadAppLink}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
