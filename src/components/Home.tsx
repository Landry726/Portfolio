import { Mail, ArrowDown } from "lucide-react";
import img from "../assets/img3.png";

function Home() {
  return (
    <div
      id="Home"
      className="flex flex-col-reverse md:flex-row justify-between items-center min-h-[90vh] px-5 md:px-20 py-10 overflow-hidden"
    >
      
      <div className="flex flex-col space-y-6 max-w-2xl animate-slide-left">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-bold text-center md:text-left leading-tight">
            Je suis <span className="text-accent">Landry</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-400 text-center md:text-left">
            Développeur Fullstack & Administrateur Système
          </h2>
        </div>

        <p className="text-lg text-center md:text-left text-base-content/80 leading-relaxed">
          Étudiant à l'ENI (Ecole Nationale d'Informatique), je transforme vos
          idées en solutions numériques performantes avec une expertise en
          développement web et administration système.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <a
            href="#Contact"
            className="btn btn-accent btn-lg shadow-lg w-full md:w-fit hover:scale-105 transition-transform"
          >
            <Mail className="w-5 h-5" />
            Contactez-moi
          </a>
        </div>

        <div className="hidden md:flex items-center gap-2 text-gray-500 animate-pulse pt-8">
          <ArrowDown className="w-4 h-4" />
          <span className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
            <a href="#About"> Découvrir mon parcours</a>
          </span>
        </div>
      </div>

     
      <div className="flex justify-center items-center relative animate-fade-scale">
     
        <div className="absolute w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>

        <img
          src={img}
          alt="Rakotonirina Landry"
          className="w-64 h-80 md:w-96 md:h-[450px] object-cover border-4 border-accent shadow-2xl z-10 animate-float"
          style={{
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
          }}
        />
      </div>
    </div>
  );
}

export default Home;