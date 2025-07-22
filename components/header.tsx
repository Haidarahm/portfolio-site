/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";

import styles from "../styles/header.module.scss";
import commonStyles from "../styles/common.module.scss";
import { useRef, useState } from "react";

type HeaderProps = {
  logoLink: string;
};

export default function Header({ logoLink }: HeaderProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.spaceBetween}>
          <Link href={logoLink} className={styles.logo} rel="home">
            <span aria-hidden="true">HA</span>
            <span className={commonStyles.hiddenText}>
              Haidar Ahmad - Homepage
            </span>
          </Link>
          <ul className={styles.navList}>
            <li>
              <a
                href="https://wa.me/963982593034"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with me on WhatsApp"
              >
                Whatsapp
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Haidarahm"
                title="Go to Haidar's GitHub"
              >
                GitHub
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="www.linkedin.com/in/haidar-ahmad-8bb40329a"
                title="Connect with Haidar on LinkedIn"
              >
                LinkedIn
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                onClick={toggleMusic}
                title="Toggle Music"
                style={{ cursor: "pointer" }}
              >
                Music
                <audio ref={audioRef} loop preload="auto">
                  <source src="/suzume.mp3" type="audio/mp3" />
                </audio>
                <FaMusic />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
