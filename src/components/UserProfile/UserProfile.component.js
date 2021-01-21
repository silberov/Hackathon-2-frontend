import React from "react";
import styles from "./UserProfile.module.css";
import { SkillsProfession } from "../Skills/SkillsProfessional.component";
import { SkillsSoftware } from "../Skills/SkillsSoftware.component";
import { SkillsLanguages } from "../Skills/SkillsLanguage.component";
export const UserProfile = () => {
  return (
    <div className={styles.UserProfile}>
      <header className={styles.header}> header </header>
      <main className={styles.main}>
        <div className={styles.mainStart}> main start </div>
        <div className={styles.mainCenter}> main center </div>
        <div className={styles.mainEnd}>
          <SkillsProfession title={"professional"} />
          <SkillsSoftware title={"software"} />
          <SkillsLanguages title={"languages"} />
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
};
