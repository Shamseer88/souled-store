import { Link, NavLink } from "react-router-dom";
import Card from "../../components/card/Card";
import styles from "./Auth.module.scss";
import { FaGoogle } from "react-icons/fa";

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <p className={styles["login-heading"]}>Reset the Password!</p>
          <div className={styles["button-div"]}>
            <NavLink to="/login" className={activeLink}>
              Login
            </NavLink>

            <NavLink to="/register" className={activeLink}>
              Register
            </NavLink>
          </div>

          <form>
            <p>-- OR --</p>
            <input type="text" placeholder="Email" required />
            <button className="--btn --btn-danger --btn-block --btn-proceed">
              RESET PASSWORD
            </button>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Reset;
