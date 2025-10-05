import { Github, Rocket, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-neon-cyan/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Rocket className="w-8 h-8 text-neon-cyan" />
            <div>
              <h3 className="font-orbitron font-bold text-xl">STELLAR<span className="text-white">AID</span></h3>
              <p className="text-xs text-gray-400">NASA Space Apps Challenge 2024</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-neon-magenta animate-pulse" />
            <span>for astronauts everywhere</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/athulgeorge24/StellarAid"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-lg hover:box-glow transition-all group"
            >
              <Github className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-transform" />
            </a>
            <button className="px-6 py-2 glass text-neon-cyan font-orbitron font-bold rounded-lg hover:box-glow transition-all text-sm">
              CONTACT US
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neon-cyan/10 text-center text-xs text-gray-500">
          <p>Powered by NASA Open Data • Human Research Program • ISS Telemetry • Heliophysics Data Portal</p>
        </div>
      </div>
    </footer>
  );
}
