import { NavLink, useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import styles from "./Auth.module.scss";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "../../components/loader/Loader";

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Registration Successful...");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
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

            <form onSubmit={registerUser}>
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
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="submit"
                className="--btn --btn-danger --btn-block --btn-proceed"
              >
                REGISTER
              </button>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Register;
