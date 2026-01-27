import Title from "./Title";
import { Calendar, MapPin } from "lucide-react";

import imgHTML from "../assets/techno/html.png";

import imgCSS from "../assets/techno/css.png";

import imgJS from "../assets/techno/js.png";

import imgREACT from "../assets/techno/react.png";

import imgTYPE from "../assets/techno/typescript.svg";

import imGTAILWIND from "../assets/techno/tailwind.png";

import imgNEXT from "../assets/techno/next-js.webp";

import imgPYTHON from "../assets/techno/python.png";

import ENIimage from "../assets/ENI.png";

import RHMimage from "../assets/RHM.jpg";

import FIDimage from "../assets/fid.jpg";

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "React", image: imgREACT },
  { id: 5, name: "TypeScript", image: imgTYPE },
  { id: 6, name: "Tailwind", image: imGTAILWIND },
  { id: 7, name: "Next.js", image: imgNEXT },
  { id: 8, name: "Python", image: imgPYTHON },
];

const experiences = [
  {
    id: 1,
    role: "Licence en Informatique",
    company: "École Nationale d’Informatique (ENI)",
    periode: "2021 - Présent",
    description: [
      "Formation spécialisée en génie logiciel et administration système.",
    ],
    image: ENIimage,
    type: "Formation",
  },
  {
    id: 2,
    role: "Stagiaire Développeur Web",
    company: "Région Haute Matsiatra",
    periode: "Août 2022 - Nov 2022",
    description: [
      "Développement d'une application de gestion des demandes d'informations.",
      "Digitalisation de flux de données pour améliorer la réactivité du service.",
    ],
    image: RHMimage,
    type: "Stage",
  },
  {
    id: 3,
    role: "Stagiaire Développeur Web",
    company: "FID Fianarantsoa",
    periode: "Sept 2023 - Déc 2024",
    description: [
      "Conception d'une plateforme web de suivi budgétaire sociale intégrée.",
      "Gestion des contributions et génération de rapports analytiques.",
    ],
    image: FIDimage,
    type: "Stage",
  },
];

function Experience() {
  return (
    <div
      id="Experience"
      className="min-h-screen py-20 px-5 md:px-10 bg-base-100"
    >
      <Title title="Expérience & Études" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 mt-10">
        <div className="md:w-1/3">
          <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
            Compétences
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="group flex flex-col items-center justify-center p-2 rounded-xl bg-base-200 hover:bg-accent/10 transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mb-2 p-1 border-2 border-transparent group-hover:border-accent rounded-full transition-all">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <span className="text-[10px] md:text-xs font-semibold uppercase">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-2/3 border-l-2 border-accent/30 pl-6 md:pl-10 space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative flex flex-col bg-base-200 p-6 rounded-2xl shadow-xl hover:shadow-accent/10 border border-transparent hover:border-accent/20 transition-all duration-300"
            >
              <div className="absolute -left-[35px] md:-left-[51px] top-10 w-4 h-4 bg-accent rounded-full border-4 border-base-100 shadow-[0_0_10px_#22d3ee]"></div>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-lg p-1 flex-shrink-0">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="badge badge-accent badge-sm outline-none text-[10px] uppercase font-bold">
                      {exp.type}
                    </span>
                    <h2 className="text-xl font-bold">{exp.role}</h2>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm opacity-70 mt-1">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} /> {exp.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} /> {exp.periode}
                    </div>
                  </div>
                </div>
              </div>

              <ul className="mt-4 space-y-2 opacity-85">
                {exp.description.map((desc, index) => (
                  <li key={index} className="flex gap-2 text-sm md:text-base">
                    <span className="text-accent">•</span> {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
