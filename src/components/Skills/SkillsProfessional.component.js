import React from "react";
import { DiCss3, DiJavascript1, DiReact, DiScrum } from "react-icons/di";
import { CgFigma } from "react-icons/cg";
import { RiKeynoteLine } from "react-icons/ri";
import { SiMicrosoftoffice, SiRedux, SiNextDotJs } from "react-icons/si";
import { FaJira } from "react-icons/fa";
import { ProgressBar } from "../ProgressBar/ProgressBar.component";
import styles from "./Skills.module.css";

export const SkillsProfession = (props) => {
  const { title } = props;
  const [rate1, color1] = ["20%", "#bea7f3"];
  const [rate2, color2] = ["40%", "#a17ff1"];
  const [rate3, color3] = ["60%", "#8c62ec"];
  const [rate4, color4] = ["80%", "#7c4bec"];
  const [rate5, color5] = ["99%", "#652de1"];

  return (
    <div className={styles.skillsMainProf}>
      <div className={styles.skillsWrapper}>
        <div style={{ color: `#652de1` }} className={styles.title}>
          {" "}
          {title}{" "}
        </div>
        <div>
          <ProgressBar
            color={color1}
            icon={<DiReact title="React" />}
            percentage={rate1}
            iconColor={"#652de1"}
          />
          <ProgressBar
            color={color2}
            icon={<DiJavascript1 title="Javascript" />}
            percentage={rate2}
            iconColor={"#652de1"}
          />
          <ProgressBar
            color={color5}
            icon={<RiKeynoteLine title="Keynote" />}
            percentage={rate5}
            iconColor={"#652de1"}
          />
          <ProgressBar
            color={color3}
            icon={<FaJira title="Jira" />}
            percentage={rate3}
            iconColor={"#652de1"}
          />
          <ProgressBar
            color={color4}
            icon={<DiCss3 title="CSS" />}
            percentage={rate4}
            iconColor={"#652de1"}
          />
        </div>
        <div>
          <ProgressBar
            color={color1}
            icon={<SiNextDotJs title="Next Js" />}
            percentage={rate1}
            iconColor={"#652de1"}
          />
          <ProgressBar
            color={color2}
            icon={<SiRedux title="Redux" />}
            percentage={rate2}
            iconColor={"#652de1"}
          />
          <ProgressBar
            color={color5}
            icon={<CgFigma title="Figma" />}
            percentage={rate5}
            iconColor={"#652de1"}
          />
          <ProgressBar
            color={color3}
            icon={<SiMicrosoftoffice title="MS Office" />}
            percentage={rate3}
            iconColor={"#652de1"}
          />
          <ProgressBar
            color={color4}
            icon={<DiScrum title="Scrum" />}
            percentage={rate4}
            iconColor={"#652de1"}
          />
        </div>
      </div>
    </div>
  );
};
