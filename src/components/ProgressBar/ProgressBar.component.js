import React from "react";
import styles from "./ProgressBar.module.css";

export const ProgressBar = (props) => {
  const { color, percentage, icon, iconColor } = props;

  const fillerStyles = {
    height: "100%",
    width: percentage,
    maxWidth: "100%",
    backgroundColor: color,
    transition: "width 1s ease-in-out",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const iconsStyles = {
    position: "relative",
    top: "0.1rem",
    left: "1rem",
    fontSize: "1.5rem",
    marginRight: "1rem",
    color: iconColor,
  };

  return (
    <div className={styles.wrapperStyles}>
      <div style={iconsStyles}> {icon} </div>
      <div className={styles.containerStyles}>
        <div style={fillerStyles} />
      </div>
    </div>
  );
};
