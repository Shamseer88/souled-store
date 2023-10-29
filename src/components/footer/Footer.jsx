import styles from "./Footer.module.scss";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h5>This is the footer &nbsp;</h5>
      <p> &copy; {year} All Rights Reserved</p>
    </div>
  );
};

export default Footer;
