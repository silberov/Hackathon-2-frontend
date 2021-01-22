import React from "react";
import Flag from "react-flagkit";
import { ProgressBar } from "../ProgressBar/ProgressBar.component";
import styles from "./Skills.module.css";

export const SkillsLanguages = (props) => {
  const { title } = props;
  const [rate1, color1] = ["20%", "#ffc100"];
  const [rate2, color2] = ["40%", "#ff9a00"];
  const [rate3, color3] = ["60%", "#ff7400"];
  const [rate4, color4] = ["80%", "#ff4d00"];
  const [rate5, color5] = ["99%", "#ff0000"];

  return (
    <div className={styles.skillsMainLang}>
      <div className={styles.skillsWrapper}>
        <div className={styles.title}> {title} </div>
        <div>
          <ProgressBar
            color={color1}
            icon={<Flag country="DE" title="German" />}
            percentage={rate1}
          />
          <ProgressBar
            color={color2}
            icon={<Flag country="GB" title="English" />}
            percentage={rate2}
          />
        </div>
        <div>
          <ProgressBar
            color={color1}
            icon={<Flag country="FR" title="French" />}
            percentage={rate1}
          />
          <ProgressBar
            color={color2}
            icon={<Flag country="SA" title="Arabic" />}
            percentage={rate2}
          />
        </div>
      </div>
    </div>
  );
};
