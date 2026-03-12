import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Architecture } from './components/Architecture';
import { Functionality } from './components/Functionality';
import { TechStack } from './components/TechStack';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Architecture />
      <Functionality />
      <TechStack />
      <CTA />
      <Footer />
    </div>
  );
}
