import { Cuboid, Facebook, Github, Linkedin, Heart, ArrowUpCircle } from "lucide-react";

function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-base-200 pt-16 pb-8 px-5 border-t border-accent/10">
      
     
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button 
          onClick={scrollToTop}
          className="btn btn-circle btn-accent shadow-lg animate-bounce hover:animate-none transition-all"
        >
          <ArrowUpCircle size={24} />
        </button>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
       
        <aside className="flex flex-col items-center md:items-start group">
          <div className="flex items-center gap-2 mb-2">
            <Cuboid className="w-8 h-8 text-accent group-hover:rotate-12 transition-transform duration-500" />
            <p className="text-2xl font-black tracking-tighter">
              LANDRY<span className="text-accent ml-2">DEV</span>
            </p>
          </div>
          <p className="text-sm opacity-60 text-center md:text-left max-w-xs">
            Développeur Fullstack passionné par la création de solutions numériques innovantes.
          </p>
        </aside>

       
        <nav>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent hover:-translate-y-2 transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-accent hover:-translate-y-2 transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-accent hover:-translate-y-2 transition-all duration-300">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </div>

      
      <div className="mt-12 pt-8 border-t border-base-300 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50 font-medium">
        <p>© {new Date().getFullYear()} LANDRY DEV. Tous droits réservés.</p>
        <p className="flex items-center gap-1">
          Fait avec <Heart size={12} className="text-red-500 animate-pulse" /> à Madagascar
        </p>
      </div>
    </footer>
  );
}

export default Footer;