import Background from './components/Background';
import Hero from './components/Hero';
import DigitalTwin from './components/DigitalTwin';
import Features from './components/Features';
import DataSources from './components/DataSources';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-space-900 text-white overflow-x-hidden">
      <Background />

      <div className="relative z-10">
        <Hero />
        <DigitalTwin />
        <Features />
        <DataSources />
        <TechStack />
        <Footer />
      </div>
    </div>
  );
}

export default App;
