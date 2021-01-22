import React from "react";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import {
  SiAdobepremiere,
  SiCinema4D,
  SiAdobeaftereffects,
  SiLinux,
  SiWindows,
  SiApple,
  SiAudacity,
} from "react-icons/si";
import { GiClapperboard } from "react-icons/gi";

import { ProgressBar } from "../ProgressBar/ProgressBar.component";
import styles from "./Skills.module.css";

export const SkillsSoftware = (props) => {
  const { title, titleColor } = props;
  const [rate1, color1] = ["20%", "#bfd3e9"];
  const [rate2, color2] = ["40%", "#89b1d7"];
  const [rate3, color3] = ["60%", "#5495c5"];
  const [rate4, color4] = ["80%", "#0081b7"];
  const [rate5, color5] = ["99%", "#006eab"];

  return (
    <div className={styles.skillsMainSoft}>
      <div className={styles.skillsWrapper}>
        <div className={styles.title} style={{ color: `#006eab` }}>
          {title}
        </div>
        <div>
          <ProgressBar
            color={color1}
            icon={<SiAdobeaftereffects title="After Effects" />}
            percentage={rate1}
            iconColor={"#006eab"}
          />
          <ProgressBar
            color={color2}
            icon={<SiAdobepremiere title="Premiere" />}
            percentage={rate2}
            iconColor={"#006eab"}
          />
          <ProgressBar
            color={color5}
            icon={<SiAudacity title="Audacity" />}
            percentage={rate5}
            iconColor={"#006eab"}
          />
          <ProgressBar
            color={color3}
            icon={<SiCinema4D title="Cinema4D" />}
            percentage={rate3}
            iconColor={"#006eab"}
          />
          <ProgressBar
            color={color4}
            icon={<GiClapperboard title="Final Cut" />}
            percentage={rate4}
            iconColor={"#006eab"}
          />
        </div>
        <div>
          <ProgressBar
            color={color1}
            icon={<DiIllustrator title="Illustrator" iconColor={"#006eab"} />}
            percentage={rate1}
            iconColor={"#006eab"}
          />
          <ProgressBar
            color={color2}
            icon={<DiPhotoshop iconColor={"#006eab"} />}
            percentage={rate2}
            iconColor={"#006eab"}
          />
          <ProgressBar
            color={color5}
            icon={<SiLinux title="Linux" />}
            percentage={rate5}
            iconColor={"#006eab"}
          />
          <ProgressBar
            color={color3}
            icon={<SiWindows title="Windows" />}
            percentage={rate3}
            iconColor={"#006eab"}
          />
          <ProgressBar
            color={color4}
            icon={<SiApple title="Apple" />}
            percentage={rate4}
            iconColor={"#006eab"}
          />
        </div>
      </div>
    </div>
  );
};
