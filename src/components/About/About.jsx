import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={`${styles.container}`} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl('about/aboutImage.png')} alt="Me sitting with a laptop" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorIcon.png')} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Full Stack Developer in Transition</h3>
                        <p>I&apos;m moving into full-stack development, focusing on technologies like React, Node.js, and JavaScript to build efficient web applications.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverIcon.png')} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>System Analyst Experience</h3>
                        <p>Currently in system management and support, I&apos;m aiming to transition into software development to work on impactful solutions.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/uiIcon.png')} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Driven to Develop Solutions</h3>
                        <p>I&apos;m passionate about building tools that make an impact. My goal is to focus on coding, problem-solving, and improving efficiency.</p>
                    </div>
                </li>
            </ul>
            </div>
        </section>
    )
}