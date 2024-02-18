import React from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Gihan Nayanajith</h1>
        <p className={styles.description}> I'm a Software Engineer </p>
        <a href="mailto:gihanmg8113@gmail.com" className={styles.contactBtn}> Contact me </a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="My image" className={styles.heroImg}/>
    <div className={StyleSheet.topBlur} />
    <div className={StyleSheet.bottomBlur} />
  </section>

  );
};

export default Hero