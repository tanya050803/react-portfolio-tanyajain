import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="relative h-full w-full bg-neutral-900">
          <div class="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Technologies></Technologies>
        <Experience></Experience>
        <Project></Project>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default App;
