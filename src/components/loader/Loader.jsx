import ReactDOM from "react-dom";
import styles from "./Loader.module.scss";
import loaderImg from "../../assets/logo-ss.png";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loaderImg} alt="loading..." width="30px" />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;
