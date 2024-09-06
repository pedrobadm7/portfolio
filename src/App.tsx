
import { About } from './components/ui/About';
import { CallToAction } from './components/ui/CallToAction';
import { Header } from './components/ui/Header';
import { Projects } from './components/ui/Projects';
import { Tech } from './components/ui/Tech';

function App() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main>
        <About />
        <Projects />
        <Tech />
        <CallToAction />

      </main>

    </div>
  );
}

export default App;
