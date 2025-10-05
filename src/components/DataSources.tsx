import { Database, Satellite, Activity, Skull } from 'lucide-react';

export default function DataSources() {
  return (
    <section className="relative py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-6xl text-white mb-4">
            NASA DATA INTEGRATION
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powered by official NASA open-source datasets and research programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <DataSourceCard
            icon={Activity}
            title="Human Research Program"
            description="Astronaut health, performance, and biomedical data"
            link="data.nasa.gov/HRP"
          />

          <DataSourceCard
            icon={Satellite}
            title="ISS Environment Telemetry"
            description="Real-time cabin pressure, oxygen, CO₂, and radiation"
            link="data.nasa.gov/ISS"
          />

          <DataSourceCard
            icon={Database}
            title="Heliophysics Open Data"
            description="Solar storms, CMEs, and cosmic radiation tracking"
            link="cdaweb.gsfc.nasa.gov"
          />

          <DataSourceCard
            icon={Skull}
            title="JPL Small Body Database"
            description="Asteroid trajectories and orbital debris monitoring"
            link="ssd.jpl.nasa.gov"
          />
        </div>

        <div className="mt-12 glass rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-neon-cyan/10 rounded-xl flex items-center justify-center">
                <Database className="w-10 h-10 text-neon-cyan" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-orbitron text-xl text-white mb-2">OpenMCT Integration</h3>
              <p className="text-gray-400">
                Visualization powered by NASA's Open Mission Control Technologies for real-time telemetry display
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DataSourceCard({
  icon: Icon,
  title,
  description,
  link
}: {
  icon: any;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="glass rounded-xl p-6 hover:box-glow transition-all group cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-space-800/50 rounded-lg flex items-center justify-center group-hover:bg-neon-cyan/10 transition-colors">
            <Icon className="w-6 h-6 text-neon-cyan" />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-orbitron text-lg text-white mb-2 group-hover:text-neon-cyan transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            {description}
          </p>
          <div className="flex items-center gap-2 text-xs text-neon-cyan/70">
            <div className="w-1 h-1 rounded-full bg-neon-cyan"></div>
            <span className="font-mono">{link}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
