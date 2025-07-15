import { FC } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiVite, SiNextdotjs, SiTypescript } from "react-icons/si";
import { IconType } from "react-icons";
import { AiOutlineAntDesign } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiSocketdotio } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { CustomBoxIcon } from "./CustomBoxIcon"; // adjust path as needed
import { SiI18Next } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiStyledcomponents } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const techIconMap: Record<string, IconType> = {
  react: FaReact,
  node: FaNodeJs,
  vite: SiVite,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  antd: AiOutlineAntDesign,
  tailwindcss: RiTailwindCssFill,
  mongodb: BiLogoMongodb,
  socket: SiSocketdotio,
  express: SiExpress,
  shadcn: SiShadcnui,
  daisyui: SiDaisyui,
  gsap: CustomBoxIcon,
  i18: SiI18Next,
  motion: TbBrandFramerMotion,
  styled: SiStyledcomponents,
  router:SiReactrouter,
  threejs:TbBrandThreejs
};

export const TechIcons: FC<{ techs: string[] }> = ({ techs }) => (
  <div
    style={{
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
      marginTop: "0.5rem",
      marginBottom: "0.8rem",
    }}
  >
    {techs.map((tech) => {
      const Icon = techIconMap[tech.toLowerCase()];
      return Icon ? (
        <span
          key={tech}
          title={tech}
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          <Icon size={24} />
        </span>
      ) : null;
    })}
  </div>
);
