import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";

function App() {
  const [technologies, setTechnologies] = useState([]);
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
    console.log("Add to stack clicked:", tech.name);
  };

  return (
    <div>
      <Navbar />
      <Hero />

      <section
        id="technologies"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">
          Explore the <span className="text-gradient-brand">Technologies</span>
        </h2>

        {loading ? (
          <p className="text-center text-gray-400 py-20">
            Loading technologies...
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                isAdded={false}
                onAdd={handleAddToStack}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
