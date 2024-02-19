import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}> About </h2>
        <div className={styles.content} id="about">
            <img 
                src={getImageUrl("about/aboutImage.png")}
                alt='My About photo'
                className={styles.aboutImage} 
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt='Cursor Image icon'/>
                    <div className={styles.aboutItemText}>
                        <h3> Frontend Developer </h3>
                        <p> I'm frontend developer with experiance in building responsive and optimized sites</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt='Server Image icon'/>
                    <div className={styles.aboutItemText}>
                        <h3> backend Developer </h3>
                        <p> I have expeiance developing fast and optimized back-end system and APIs</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt='UI Image icon'/>
                    <div className={styles.aboutItemText}>
                        <h3> UI Designer </h3>
                        <p>I have designed multiple landing pages and have created design systems as well </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
