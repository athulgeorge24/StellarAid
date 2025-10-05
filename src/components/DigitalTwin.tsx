import { Activity, Brain, Heart, Thermometer, Droplets, Wind } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DigitalTwin() {
  return (
    <section className="relative py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-6xl text-white mb-4">
            DIGITAL TWIN MONITOR
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-time AI-powered health tracking using NASA's Human Research Program data
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AstronautAvatar />
          <VitalStats />
        </div>
      </div>
    </section>
  );
}
function AstronautAvatar() {
  const [heartbeat, setHeartbeat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartbeat(prev => !prev);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="glass rounded-2xl p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-magenta/5 to-transparent"></div>

        <div className="relative z-10 flex flex-col items-center">
          {/* smaller avatar container */}
          <div className="relative w-64 h-64 mb-8">
            <div
              className={`absolute inset-0 rounded-full bg-neon-magenta/20 blur-2xl transition-all duration-300 ${
                heartbeat ? 'scale-110 opacity-100' : 'scale-100 opacity-50'
              }`}
            ></div>

            <div className="absolute inset-0 rounded-full border-4 border-neon-magenta/30 animate-pulse-slow"></div>
            <div className="absolute inset-5 rounded-full border-2 border-neon-magenta/20"></div>
            <div className="absolute inset-9 rounded-full border border-neon-magenta/10"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                {/* smaller astronaut bubble */}
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-neon-magenta to-neon-cyan flex items-center justify-center mb-3">
                  <span className="text-6xl">👨‍🚀</span>
                </div>
              </div>
            </div>

            {/* Status pill stays same */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="glass px-4 py-1.5 rounded-full flex items-center gap-2">
                <div
                  className={`w-2.5 h-2.5 rounded-full bg-neon-lime ${
                    heartbeat ? 'animate-ping' : ''
                  }`}
                ></div>
                <span className="text-neon-lime text-xs font-bold">ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Caption and vitals */}
          <div className="text-center space-y-2">
            <h3 className="font-orbitron text-xl text-white">Astronaut Twin</h3>
            <p className="text-gray-400 text-sm">ID: AST-2024-001</p>
            <div className="flex items-center justify-center gap-2 pt-2">
              <Heart
                className={`w-5 h-5 text-neon-magenta ${
                  heartbeat ? 'scale-125' : 'scale-100'
                } transition-transform`}
              />
              <span className="text-neon-magenta font-bold text-base">72 BPM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VitalStats() {
  return (
    <div className="space-y-2">
      <VitalCard
        icon={Heart}
        label="Heart Rate"
        value="72"
        unit="BPM"
        status="normal"
        trend={[65, 68, 70, 72, 71, 72]}
        color="magenta"
      />
      <VitalCard
        icon={Thermometer}
        label="Body Temperature"
        value="36.8"
        unit="°C"
        status="normal"
        trend={[36.5, 36.6, 36.7, 36.8, 36.8, 36.8]}
        color="cyan"
      />
      <VitalCard
        icon={Droplets}
        label="Blood Oxygen"
        value="98"
        unit="%"
        status="optimal"
        trend={[96, 97, 97, 98, 98, 98]}
        color="lime"
      />
      <VitalCard
        icon={Brain}
        label="Stress Level"
        value="Low"
        unit=""
        status="normal"
        trend={[30, 28, 25, 23, 20, 18]}
        color="cyan"
      />
      <VitalCard
        icon={Wind}
        label="Cabin CO₂"
        value="0.04"
        unit="%"
        status="normal"
        trend={[0.038, 0.039, 0.040, 0.040, 0.040, 0.040]}
        color="magenta"
      />
    </div>
  );
}

function VitalCard({
  icon: Icon,
  label,
  value,
  unit,
  status,
  trend,
  color
}: {
  icon: any;
  label: string;
  value: string;
  unit: string;
  status: 'normal' | 'optimal' | 'warning';
  trend: number[];
  color: 'cyan' | 'magenta' | 'lime';
}) {
  const statusColors = {
    normal: 'text-neon-cyan',
    optimal: 'text-neon-lime',
    warning: 'text-yellow-500',
  };

  const colorClasses = {
    cyan: 'text-neon-cyan',
    magenta: 'text-neon-magenta',
    lime: 'text-neon-lime',
  };

  return (
    <div className="glass rounded-lg p-3 hover:box-glow transition-all group cursor-pointer">
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-2">
          <div className={`p-1 rounded bg-space-800/50 ${colorClasses[color]}`}>
            <Icon className="w-3 h-3" />
          </div>
          <div>
            <p className="text-gray-400 text-[10px]">{label}</p>
            <div className="flex items-baseline gap-0.5">
              <span className={`text-sm font-bold ${colorClasses[color]}`}>{value}</span>
              {unit && <span className="text-gray-500 text-[10px]">{unit}</span>}
            </div>
          </div>
        </div>
        <span className={`text-[9px] font-bold ${statusColors[status]} uppercase`}>
          {status}
        </span>
      </div>

      <div className="flex items-end gap-0.5 h-6">
        {trend.map((val, idx) => {
          const maxVal = Math.max(...trend);
          const minVal = Math.min(...trend);
          const height = ((val - minVal) / (maxVal - minVal)) * 100 || 0;
          return (
            <div
              key={idx}
              className={`flex-1 ${colorClasses[color]} bg-current opacity-50 rounded-t transition-all group-hover:opacity-100`}
              style={{ height: `${height}%` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
