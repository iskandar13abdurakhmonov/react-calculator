/* eslint-disable react/prop-types */
import styles from  "./Screen.module.css";

const Screen = ({ value }) => {
  return (
    <div className={styles.headerBottom}>
      <p className={styles.outputPanel}>{value}</p>
    </div>
  );
};

export default Screen;