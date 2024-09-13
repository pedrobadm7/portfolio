import { About } from './components/ui/About';
import { CallToAction } from './components/ui/CallToAction';
import { Footer } from './components/ui/Footer';
import { Header } from './components/ui/Header';
import { Projects } from './components/ui/Projects';
import { Tech } from './components/ui/Tech';

function App() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <About />
        <Tech />
        <Projects />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
