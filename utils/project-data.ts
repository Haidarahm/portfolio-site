import { StaticImageData } from "next/image";

import Home963 from "../images/home-page-963.webp";
import chat from "../images/chat.webp"
import fashion from "../images/Wibe-Home-Desktop.webp";
import soda from "../images/soda.png"
import iphone from "../images/iphone.webp"
import games from "../images/games.png"
export type ProjectType = {
  name: string;
  description: string;
  longDescription?: string;
  image: StaticImageData;
  mobileImage?: StaticImageData;
  figma?: StaticImageData;
  old?: StaticImageData;
  code?: string;
  link?: string;
  slug: string;
  type: string;
  tech?: string[];
};

export const projectsList: ProjectType[] = [
  {
    name: "Syrian Tourism Site",
    description:
      "963sy is a modern tourism platform showcasing Syria’s historical and cultural sites. Visitors can enjoy immersive virtual tours and accessible content, including sign language support, making Syrian heritage discoverable for everyone.",
    image: Home963,
    link: "https://963sy.net",
    slug: "Syrian Tourism Site",
    type: "Frontend",
    tech: ["vite", "react","router", "antd","gsap","styled","motion","i18"],
  },
  {
    name: "chat-system",
    description:
      "A modern real-time chat application with user authentication, profile management, and image uploads. Built using React, Node.js, Express, MongoDB, and Socket.io, it delivers instant messaging and a smooth, responsive user experience.",
    image: chat,
    code: "https://github.com/Haidarahm/chat-system",
    slug: "chat system",
    type: "full-stack",
    tech: ["react","daisyui","vite","router", "node","mongodb","express","socket",""],
  },
  {
    name: "Iphone 15 website",
    description:
      "This project is a modern redesign of the Apple iPhone 15 Pro website, featuring interactive 3D models, smooth GSAP animations, and a custom video carousel—all built with React.js, Three.js, and Tailwind CSS. The site is fully responsive and closely mirrors Apple’s elegant style, offering users an immersive and engaging experience across all devices.",
    image: iphone,
    link: "https://haidarahm.github.io/iphone-website/",
    code:"https://github.com/Haidarahm/iphone",
    slug: "iphone",
    type: "frontend",
    tech: ["react", "threejs", "gsap","tailwindcss"],
  },
  {
    name: "Fashion website",
    description:
      "Wibe Studio is a stylish fashion website built with React, styled-components, GSAP, and Framer Motion, featuring smooth navigation and dynamic animations for an engaging user experience..",
    image: fashion,
    link: "https://haidarahm.github.io/fashion/",
    code:"https://github.com/Haidarahm/fashion-website",
    slug: "fashion-sebsite",
    type: "frontend",
    tech: ["react","gsap","styled","motion"],
  },
  {
    name: "Fizzi Soda website",
    description:
      "A 3D interactive website for Fizzi Juice, built with Next.js, React, and Three.js, featuring animated visuals and easy content management via Prismic CMS",
    image: soda,
    link: "https://fizzi-soda.vercel.app/",
    code:"https://github.com/Haidarahm/Fezzi-3D-Website",
    slug: "Fizzi Soda website",
    type: "frontend",
    tech: ["react","gsap","nextjs","motion"],
  },
  {
    name: "Game trailer website",
    description:
      "A React web app for showcasing game trailers with interactive 3D and multimedia features. using (React, motion, threejs, tailwindcss)",
    image: games,
    link: "https://haidarahm.github.io/games-trailer-website/",
    code:"https://github.com/Haidarahm/games-trailer",
    slug: "Game Trailer website",
    type: "frontend",
    tech: ["react","motion","threejs","tailwindcss"],
  },
];
