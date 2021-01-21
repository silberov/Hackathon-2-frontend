import React from "react";
import styles from "./ProgressBar.module.css";

export const ProgressBar = (props) => {
  const { color, percentage, icon } = props;

  const fillerStyles = {
    height: "100%",
    width: percentage,
    maxWidth: "100%",
    backgroundColor: color,
    transition: "width 1s ease-in-out",
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div className={styles.wrapperStyles}>
      <div className={styles.icons}> {icon} </div>
      <div className={styles.containerStyles}>
        <div style={fillerStyles} />
      </div>
    </div>
  );
};
