import bannerImage from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Build Your Ideal
            <br />
            <span className="text-gradient-brand">Development Stack</span>
          </h1>

          <p className="mt-4 text-gray-500 text-base max-w-md">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="btn-gradient font-semibold px-6 py-3 rounded-md"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="font-semibold px-6 py-3 rounded-md border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end md:-mt-6">
          <img
            src={bannerImage}
            alt="Technology stack illustration"
            style={{ width: "350px", height: "350px", objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
}
