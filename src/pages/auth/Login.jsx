import { Link, NavLink } from "react-router-dom";
import styles from "./Auth.module.scss";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
import { useState } from "react";

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <button
            className="--btn --btn-primary --btn-block --btn-proceed"
            style={{ marginTop: "10px" }}
          >
            <FaGoogle color="#fff" />
            &nbsp; Login With Google
          </button>
          <form>
            <p>-- OR --</p>
            <input
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="--btn --btn-danger --btn-block --btn-proceed"
            >
              PROCEED
            </button>
            <div className={styles.links}>
              <Link to="/password-reset">Reset Password</Link>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Login;
