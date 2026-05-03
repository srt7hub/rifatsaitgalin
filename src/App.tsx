import Hero from './components/Hero';
import RolesSection from './components/RolesSection';
import QuoteTransition from './components/QuoteTransition';
import ProjectsSection from './components/ProjectsSection';
import ClosingSection from './components/ClosingSection';

function App() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#171717]">
      <Hero />
      <RolesSection />
      <QuoteTransition />
      <ProjectsSection />
      <ClosingSection />
    </main>
  );
}

export default App;
