import Title from "./Title";
import { Github, Car, Package, Landmark,  } from "lucide-react";

import img1 from "../assets/projects/Gestion-Enseignant.jpg";
import img2 from "../assets/projects/Portfolio.png";
import img3 from "../assets/projects/GestionCompteBancaire.png";
import img4 from "../assets/projects/Meteo-App.png";
import img5 from "../assets/projects/API Todo List.png";
import img6 from "../assets/projects/Classification TB.png";
import img7 from "../assets/projects/Classification.png"

const projects = [
  {
    id: 1,
    title: "Gestions des enseignants",
    description:
      "Application mobile  pour la gestion des enseignants avec calcul automatique des salaires en temps réel.",
    technologies: ["React Native", "Supabase", "Expo"],
    demoLink: "#",
    repoLink: "https://github.com/Landry726/Gestion-des-enseignants.git",
    image: img1,
    icon: <Car className="text-accent" />,
  },
  {
    id: 2,
    title: "Portfolio Personnel",
    description:
      "Mon portfolio personnel, une site  vitrine interactive développée avec React, Tailwind CSS et Vite",
    technologies: ["React.js", "Tailwindcss", "TypeScript"],
    demoLink: "#",
    repoLink: "https://github.com/Landry726/Portfolio.git",
    image: img2,
    icon: <Package className="text-accent" />,
  },
  {
    id: 3,
    title: "Transactions Bancaires",
    description:
      "Application Fullstack sécurisée permettant de simuler des virements et de gérer des comptes clients.",
    technologies: ["React.js", "Node.js", "PostgreSQL"],
    demoLink: "#",
    repoLink: "https://github.com/Landry726/Gestion-Compte-Bancaire.git",
    image: img3,
    icon: <Landmark className="text-accent" />,
  },
  {
    id: 4,
    title: "Application meteo ",
    description:
      "Application météo simple  qui affiche les conditions météorologiques actuelles  pour n'importe quelle ville du monde.",
    technologies: ["React.js", "TailwindCSS", "OpenWeatherMap API"],
    demoLink: "#",
    repoLink: "https://github.com/Landry726/App-Meteo.git",
    image: img4,
  },
  {
    id: 5,
    title: "API Todo List",
    description:
      "Une application TodoList simple et moderne qui permet aux utilisateurs de créer, lire, mettre à jour et supprimer des tâches.",
    technologies: ["  React.js", "TypeScript", "TailwindCSS"],
    demoLink: "#",
    repoLink: "https://github.com/Landry726/todo-list.git",
    image: img5,
  },
  {
    id: 6,
    title: "Classification Emails",
    description:
      "Une application web qui permet de classer automatiquement les emails en plusieurs catégories ",
    technologies: ["Python", "FAST API", "HugingFace" ,"React.js" , ],
    demoLink: "#",
    repoLink: "https://github.com/Landry726/Classification-Email.git",
    image: img6,img7
  },
];

function Project() {
  return (
    <div
      id="Projects"
      className="min-h-screen w-full py-20 px-5 md:px-10 bg-base-100 flex flex-col items-center"
    >
      <Title title="Mes Projets" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={project.id}
            style={{ transitionDelay: `${index * 100}ms` }}
            className="flex flex-col bg-base-200 rounded-[2rem] overflow-hidden shadow-xl 
                       hover:shadow-accent/20 hover:-translate-y-3 transition-all duration-500 group"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-200/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>

              <p className="text-sm opacity-70 mb-5 flex-1 italic">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-[10px] badge badge-accent badge-sm font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {/* <a
                  href={project.demoLink}
                  className="btn btn-accent btn-sm flex-1 gap-2 rounded-xl shadow-lg shadow-accent/20"
                >
                  <Eye size={14} /> Démo
                </a> */}
                <a
                  href={project.repoLink}
                  className="btn btn-accent btn-sm flex-1 gap-2 rounded-xl shadow-lg shadow-accent/20"
                >
                  <Github size={14} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
