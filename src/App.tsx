import { About } from './components/ui/About';
import { Header } from './components/ui/Header';
import { Projects } from './components/ui/Projects';

function App() {
  return (
    <div className="font-['dm_sans', 'sans-serif'] text-[#333] bg-[url('/code-bg.jpg')] bg-cover bg-center bg-no-repeat ">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
