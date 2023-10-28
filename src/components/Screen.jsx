/* eslint-disable react/prop-types */
import styles from  "./Screen.module.css";

const Screen = ({ value }) => {
  return (
    <div className={styles.screen} mode="single" max={70}>
      {value}
    </div>
  );
};

export default Screen;