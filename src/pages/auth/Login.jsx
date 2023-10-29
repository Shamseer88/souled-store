import { Link, NavLink } from "react-router-dom";
import styles from "./Auth.module.scss";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <p className={styles["login-heading"]}>Login with The Souled Store</p>
          <div className={styles["button-div"]}>
            <NavLink to="/login" className={activeLink}>
              Login
            </NavLink>

            <NavLink to="/register" className={activeLink}>
              Register
            </NavLink>
          </div>
          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="--btn --btn-danger --btn-block --btn-proceed">
              PROCEED
            </button>
            <div className={styles.links}>
              <Link to="/reset-password">Reset Password</Link>
            </div>
            <p>-- or --</p>
          </form>
          <button className="--btn --btn-primary --btn-block --btn-proceed">
            <FaGoogle color="#fff" />
            &nbsp; Login With Google
          </button>
        </div>
      </Card>
    </section>
  );
};

export default Login;
