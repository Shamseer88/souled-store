import { Link, NavLink } from "react-router-dom";
import Card from "../../components/card/Card";
import styles from "./Auth.module.scss";
import { FaGoogle } from "react-icons/fa";

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <p className={styles["login-heading"]}>
            Register with The Souled Store
          </p>
          <div className={styles["button-div"]}>
            <NavLink to="/login" className={activeLink}>
              Login
            </NavLink>

            <NavLink to="/register" className={activeLink}>
              Register
            </NavLink>
          </div>
          <button
            className="--btn --btn-primary --btn-block --btn-proceed"
            style={{ marginTop: "10px" }}
          >
            <FaGoogle color="#fff" />
            &nbsp; With Google
          </button>

          <form>
            <p>-- OR --</p>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button className="--btn --btn-danger --btn-block --btn-proceed">
              REGISTER
            </button>
            {/* <div className={styles.links}>
              <Link to="/reset-password">Reset Password</Link>
            </div> */}
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Register;
