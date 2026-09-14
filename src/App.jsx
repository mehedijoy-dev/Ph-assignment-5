import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackPanel from "./components/StackPanel";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warn(tech.name + " is already in your stack!");
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(tech.name + " added to your stack!");
  };

  const handleRemove = (id) => {
    const tech = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (tech) toast.info(tech.name + " removed from your stack.");
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Your stack has been cleared.");
  };

  return (
    <div>
      <Navbar />
      <Hero />

      <section
        id="technologies"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-10 sm:pb-24"
      >
        <div className="text-center sm:text-left mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Explore the{" "}
            <span className="text-gradient-brand">Technologies</span>
          </h2>
          <p className="mt-2 text-gray-400 text-sm sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-400 py-20">
            Loading technologies...
          </p>
        ) : (
          <div className="grid lg:grid-cols-[1fr_280px] gap-2 items-start">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

            <StackPanel
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        )}
      </section>

      <FAQ />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
        style={{ width: "300px" }}
      />
    </div>
  );
}

export default App;
