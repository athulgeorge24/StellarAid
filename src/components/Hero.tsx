import { Rocket, Heart, Shield, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/10 via-transparent to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <div className="inline-block animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-neon-cyan rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
              <Rocket className="w-24 h-24 text-neon-cyan relative z-10 mx-auto" strokeWidth={1.5} />
            </div>
          </div>

          <h1 className="font-orbitron font-bold text-6xl md:text-8xl text-white">
            STELLARAID<span className="text-neon-cyan text-glow"></span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your Astronaut's AI Twin for Self-Care, Rescue, and Mission Safety
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <FeaturePill icon={Heart} text="Health Monitor" color="cyan" />
            <FeaturePill icon={Shield} text="Rescue Protocol" color="magenta" />
            <FeaturePill icon={Globe} text="Space Weather" color="lime" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="group relative px-8 py-4 bg-neon-cyan text-space-900 font-orbitron font-bold rounded-lg overflow-hidden transition-all hover:scale-105">
              <span className="relative z-10">LAUNCH DASHBOARD</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            <button className="px-8 py-4 glass text-neon-cyan font-orbitron font-bold rounded-lg hover:box-glow transition-all">
              VIEW DEMO
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
    </section>
  );
}

function FeaturePill({ icon: Icon, text, color }: { icon: any; text: string; color: 'cyan' | 'magenta' | 'lime' }) {
  const colorClasses = {
    cyan: 'border-neon-cyan/30 text-neon-cyan hover:box-glow',
    magenta: 'border-neon-magenta/30 text-neon-magenta hover:box-glow-magenta',
    lime: 'border-neon-lime/30 text-neon-lime hover:box-glow-lime',
  };

  return (
    <div className={`glass px-6 py-3 rounded-full flex items-center gap-3 ${colorClasses[color]} transition-all cursor-pointer hover:scale-105`}>
      <Icon className="w-5 h-5" />
      <span className="font-medium">{text}</span>
    </div>
  );
}
