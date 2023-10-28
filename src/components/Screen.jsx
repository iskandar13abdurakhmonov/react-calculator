/* eslint-disable react/prop-types */
import styles from  "./Screen.module.css";

const Screen = ({ value }) => {
  return (
    <div className={styles.screen}>
      {value}
    </div>
  );
};

export default Screen;