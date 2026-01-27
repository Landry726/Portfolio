import Title from "./Title";
import { Github, Car, Package, Landmark, Eye } from "lucide-react";


import img1 from "../assets/projects/1.png"; 
import img2 from "../assets/projects/2.png"; 
import img3 from "../assets/projects/3.png"; 


const projects = [
  {
    id: 1,
    title: "Livraison de Voiture",
    description: "Application mobile permettant la commande et le suivi de livraison de véhicules en temps réel.",
    technologies: ["Flutter", "Dart", "Firebase"],
    demoLink: "#",
    repoLink: "#",
    image: img1,
    icon: <Car className="text-accent" />
  },
  {
    id: 2,
    title: "Gestion de Colis",
    description: "Plateforme web logistique pour le suivi des expéditions et la gestion des stocks en entrepôt.",
    technologies: ["HTML/CSS", "JavaScript", "PHP"],
    demoLink: "#",
    repoLink: "#",
    image: img2,
    icon: <Package className="text-accent" />
  },
  {
    id: 3,
    title: "Transactions Bancaires",
    description: "Application Fullstack sécurisée permettant de simuler des virements et de gérer des comptes clients.",
    technologies: ["React.js", "Node.js", "PostgreSQL"],
    demoLink: "#",
    repoLink: "#",
    image: img3,
    icon: <Landmark className="text-accent" />
  },
];

function Project() {
  return (
   
    <div id="Projects" className="min-h-screen w-full py-20 px-5 md:px-10 bg-base-100 flex flex-col items-center">
      
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
                  <span key={i} className="px-3 py-1 text-[10px] font-bold bg-accent/10 text-accent rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>

             
              <div className="flex gap-3">
               <a href={project.demoLink} className="btn btn-accent btn-sm flex-1 gap-2 rounded-xl shadow-lg shadow-accent/20">
                  <Eye size={14} /> Démo
                </a>
                <a href={project.repoLink} className="btn btn-outline btn-sm gap-2 rounded-xl">
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