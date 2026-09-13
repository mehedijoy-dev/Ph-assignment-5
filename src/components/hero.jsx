import bannerImage from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 sm:py-12 md:py-16"
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Build Your Ideal
            <br />
            <span className="text-gradient-brand">Development Stack</span>
          </h1>

          <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-md mx-auto md:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-6 flex gap-2 sm:gap-4 justify-center md:justify-start">
            <a
              href="#technologies"
              className="btn-gradient font-semibold text-sm sm:text-base px-3 sm:px-6 py-2.5 sm:py-3 rounded-md whitespace-nowrap"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="font-semibold text-sm sm:text-base px-3 sm:px-6 py-2.5 sm:py-3 rounded-md border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end md:-mt-6">
          <img
            src={bannerImage}
            alt="Technology stack illustration"
            style={{
              width: "380px",
              height: "380px",
              maxWidth: "90%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
}
