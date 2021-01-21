import React from "react";
import {
  DiIllustrator,
  DiCss3,
  DiPhotoshop,
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import { ProgressBar } from "../ProgressBar/ProgressBar.component";
import styles from "./Skills.module.css";

export const SkillsLanguages = (props) => {
  const { title } = props;
  const [rate1, color1] = ["20%", "#bea7f3"];
  const [rate2, color2] = ["40%", "#a17ff1"];
  const [rate3, color3] = ["60%", "#8c62ec"];
  const [rate4, color4] = ["80%", "#7c4bec"];
  const [rate5, color5] = ["99%", "#652de1"];

  return (
    <div className={styles.skillsMain}>
      <div className={styles.skillsWrapper}>
        <div className={styles.title}> {title} </div>
        <div>
          <ProgressBar
            color={color1}
            icon={<DiIllustrator />}
            percentage={rate1}
          />
          <ProgressBar
            color={color2}
            icon={<DiPhotoshop />}
            percentage={rate2}
          />
          <ProgressBar
            color={color5}
            icon={<DiJavascript1 />}
            percentage={rate5}
          />
          <ProgressBar color={color3} icon={<DiReact />} percentage={rate3} />
          <ProgressBar color={color4} icon={<DiCss3 />} percentage={rate4} />
        </div>
        <div>
          <ProgressBar
            color={color1}
            icon={<DiIllustrator />}
            percentage={rate1}
          />
          <ProgressBar
            color={color2}
            icon={<DiPhotoshop />}
            percentage={rate2}
          />
          <ProgressBar
            color={color5}
            icon={<DiJavascript1 />}
            percentage={rate5}
          />
          <ProgressBar color={color3} icon={<DiReact />} percentage={rate3} />
          <ProgressBar color={color4} icon={<DiCss3 />} percentage={rate4} />
        </div>
      </div>
    </div>
  );
};
