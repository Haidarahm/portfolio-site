import Image from "next/image";
import { Suspense } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "../styles/home.module.scss";
import commonStyles from "../styles/common.module.scss";
import introOverlayStyles from "../styles/intro-overlay.module.scss";

import Header from "../components/header";
import IntroOverlay from "../components/intro-overlay";
import { projectsList } from "../utils/project-data";
import ProjectListing from "../components/project-listing";
import Haidar from "../images/Haidar.jpg";
import ContactSection from "../components/ContactSection";
import { AboutText } from "../components/AboutText";
import RotatingText from "../components/RotatingText";

export default function Homepage() {
  return (
    <div className={styles.homeContainer}>
      <Suspense
        fallback={<div className={introOverlayStyles.introOverlay}></div>}
      >
        <IntroOverlay />
      </Suspense>
      <div id="afterAnimation">
        <Header logoLink="/" />
        <main>
          <section className={styles.hero}>
            <div className={styles.cta}>
              <h1 className={commonStyles.hiddenText}>Haidar Ahmad</h1>
              <h2 id="title" className={styles.title}>
                I&apos;am
                <RotatingText
                  texts={[
                    "Full-stack ",
                    "Mern-stack ",
                    "Frontend ",
                    "Backend ",
                  ]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
                Developer
              </h2>
              <div id="portraitContainer" className={styles.portraitContainer}>
                <Image
                  src={Haidar}
                  alt="Portrait of Haidar Ahmad"
                  className={styles.portrait}
                  priority
                />
              </div>
            </div>
            <p id="jobTitle" className={styles.jobTitle}>
              Haidar Ahmad / Full-stack Developer
            </p>
            <a
            href="/Haidar-portfolio.pdf"
              // href="https://drive.google.com/file/d/1j8A76DuHoCVg7JaL0Jn8kIRZC53EHgzf/view?usp=sharing"
              className={styles.resumeButton}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </section>

          <section id="aboutContainer" className={styles.aboutContainer}>
            <h2>About Me</h2>
            <AboutText />
          </section>
          <section className={styles.projectContainer} id="projects">
            <div className={styles.projectTitleContainer}>
              <h2>My Projects</h2>
            </div>
            <div className={styles.projectListingsContainer}>
              {projectsList.map((project) => (
                <ProjectListing key={project.slug} project={project} />
              ))}
            </div>
          </section>
          <section className={styles.contactContainer} id="projects">
            <ContactSection />
          </section>
        <footer>
          <h2>Connect with Me</h2>
          <ul id="footerLinks" className={styles.footerLinks}>
            <li>
              <a
                href="https://github.com/Haidarahm"
                target="_blank"
                rel="noopener noreferrer"
                title="Go to Haidar's GitHub"
              >
                GitHub
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/haidar-ahmad-8bb40329a/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with Haidar on LinkedIn"
              >
                LinkedIn
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </footer>
        </main>
      </div>
    </div>
  );
}
