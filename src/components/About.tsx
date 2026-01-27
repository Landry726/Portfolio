import Title from "./Title";
import img from "../assets/img3.png";
import { Layers, Layout, Server } from "lucide-react";

const aboutSection = [
  {
    id: 1,
    title: "Développeur Frontend",
    description: "Conception d'interfaces modernes et réactives avec React.js , Next js  et Tailwind CSS.",
    icon: <Layout className="text-accent w-8 h-8" />,
  },
  {
    id: 2,
    title: "Développeur Backend",
    description: "Création d'APIs performantes et gestion de bases de données avec Node.js et Python",
    icon: <Server className="text-accent w-8 h-8" />,
  },
  {
    id: 3,
    title: "Administration & Réseaux",
    description: "Gestion de serveurs Linux/Windows et optimisation des infrastructures réseaux.",
    icon: <Layers className="text-accent w-8 h-8" />,
  },
];

function About() {
  return (
    <div className="bg-base-200 p-10 py-20 mb-10 md:mb-32" id="About">
      <Title title="À propos" />
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12 mt-15">
        
      
        <div className="hidden md:block w-1/3 animate-fade-in">
          <img 
            src={img} 
            className="w-full object-cover rounded-3xl shadow-2xl border-b-8 border-accent transform hover:scale-105 transition-transform duration-500" 
            alt="Landry"
          />
        </div>

       
        <div className="flex flex-col gap-6 w-full md:w-2/3">
          {aboutSection.map((section) => (
            <div 
              key={section.id} 
              className="group flex flex-col md:flex-row items-center bg-base-100 p-6 rounded-2xl shadow-lg 
                         hover:shadow-accent/20 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-accent/50"
            >
              <div className="p-4 bg-accent/10 rounded-full  group-hover:text-white transition-colors duration-300">
                {section.icon}
              </div>
              
              <div className="md:ml-6 text-center md:text-left mt-4 md:mt-0">
                <h2 className="text-xl font-bold text-accent">{section.title}</h2>
                <p className="text-sm opacity-80 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default About;