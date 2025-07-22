import Link from "next/link";
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
import DevIcons from "../components/DevIcons";
import Tech from "../components/Tech";

const blogPosts: { title: string; slug: string; date: string }[] = [
  {
    title: "I Just Read User Friendly by Cliff Kuang and Robert Fabricant",
    slug: "just-read-user-friendly",
    date: " June 8, 2024",
  },
  {
    title: "Please Do an Accessibility Audit of Your Website",
    slug: "please-do-an-accessibility-audit",
    date: " April 27, 2024",
  },
  {
    title: "Why I Don't Want to Work Remotely Early in My Career",
    slug: "no-remote-early-in-my-career",
    date: " January 3, 2024",
  },
  {
    title: "Falling Out of Love with Twin Macro",
    slug: "falling-out-of-love-with-twin-macro",
    date: "December 29, 2023",
  },
];

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
                I'am
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
              href="/resume.pdf"
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
          <section className={styles.projectContainer} id="projects">
            <ContactSection />
          </section>
        </main>
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
                href="www.linkedin.com/in/haidar-ahmad-8bb40329a"
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
      </div>
    </div>
  );
}
