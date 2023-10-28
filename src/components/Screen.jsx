/* eslint-disable react/prop-types */
import { Textfit } from "react-textfit";
import styles from  "./Screen.module.css";

const Screen = ({ value }) => {
  return (
    <Textfit className={styles.screen} mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;