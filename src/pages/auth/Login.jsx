import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Auth.module.scss";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/loader/Loader";

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        toast.success("Login Successful!");
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  // Login with Google
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <p className={styles["login-heading"]}>
              Login with The Souled Store
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
              onClick={signInWithGoogle}
            >
              <FaGoogle color="#fff" />
              &nbsp; Login With Google
            </button>
            <form onSubmit={loginUser}>
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
    </>
  );
};

export default Login;
