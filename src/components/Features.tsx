import { Heart, Shield, Sun, Satellite, Zap, Users } from 'lucide-react';

export default function Features() {
  return (
    <section className="relative py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-6xl text-white mb-4">
            MISSION FEATURES
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive astronaut support powered by NASA open-source datasets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={Heart}
            title="Self-Care Companion"
            description="AI-driven wellness tracking with personalized meditation, exercise routines, and nutrition guidance based on ISS psychological data."
            color="magenta"
            features={[
              "Circadian rhythm optimization",
              "Stress & fatigue detection",
              "AR-guided physical therapy"
            ]}
          />

          <FeatureCard
            icon={Shield}
            title="Emergency Rescue"
            description="Real-time anomaly detection in vital signs and habitat environment with automatic emergency protocols activation."
            color="cyan"
            features={[
              "First aid protocol library",
              "Auto distress beacon",
              "Mission control alerts"
            ]}
          />

          <FeatureCard
            icon={Sun}
            title="Space Weather Alerts"
            description="Integration with NASA's Heliophysics Data Portal for solar flare and radiation event predictions and preventive measures."
            color="lime"
            features={[
              "Solar storm tracking",
              "CME early warnings",
              "Radiation shielding alerts"
            ]}
          />

          <FeatureCard
            icon={Satellite}
            title="Habitat Monitoring"
            description="Continuous tracking of ISS environment metrics including oxygen levels, CO₂, cabin pressure, and temperature."
            color="cyan"
            features={[
              "Environmental sensors",
              "Air quality analysis",
              "System health checks"
            ]}
          />

          <FeatureCard
            icon={Zap}
            title="Predictive AI"
            description="Machine learning models trained on Human Research Program data to predict health risks before they manifest."
            color="magenta"
            features={[
              "Risk pattern detection",
              "What-if simulations",
              "Preventive recommendations"
            ]}
          />

          <FeatureCard
            icon={Users}
            title="Earth Applications"
            description="Scalable technology for remote healthcare in isolated environments: submarines, Antarctic stations, and more."
            color="lime"
            features={[
              "Remote diagnostics",
              "Telemedicine integration",
              "Global health impact"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
  features
}: {
  icon: any;
  title: string;
  description: string;
  color: 'cyan' | 'magenta' | 'lime';
  features: string[];
}) {
  const colorClasses = {
    cyan: {
      text: 'text-neon-cyan',
      bg: 'bg-neon-cyan/10',
      border: 'border-neon-cyan/30',
      glow: 'hover:box-glow'
    },
    magenta: {
      text: 'text-neon-magenta',
      bg: 'bg-neon-magenta/10',
      border: 'border-neon-magenta/30',
      glow: 'hover:box-glow-magenta'
    },
    lime: {
      text: 'text-neon-lime',
      bg: 'bg-neon-lime/10',
      border: 'border-neon-lime/30',
      glow: 'hover:box-glow-lime'
    },
  };

  const colors = colorClasses[color];

  return (
    <div className={`glass rounded-xl p-6 ${colors.glow} transition-all group cursor-pointer hover:scale-105`}>
      <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-7 h-7 ${colors.text}`} />
      </div>

      <h3 className={`font-orbitron font-bold text-xl text-white mb-3`}>
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {description}
      </p>

      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm">
            <div className={`w-1 h-1 rounded-full ${colors.text} bg-current`}></div>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
