import bannerImage from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-2 sm:pt-24 sm:pb-6 md:pt-28 md:pb-8 min-h-[calc(100vh-64px)] flex items-center"
    >
      <div className="grid md:grid-cols-2 gap-8 items-start w-full">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Build Your Ideal
            <br />
            <span className="text-gradient-brand">Development Stack</span>
          </h1>

          <p className="mt-4 text-gray-500 text-xs sm:text-sm max-w-md mx-auto md:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-10 flex items-center justify-center md:justify-start gap-3 w-full max-w-xs sm:max-w-sm mx-auto md:mx-0">
            <a
              href="#technologies"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("technologies")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-gradient flex-1 inline-flex items-center justify-center font-semibold text-xs sm:text-sm h-11 px-3 rounded-lg whitespace-nowrap"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="flex-1 inline-flex items-center justify-center font-semibold text-xs sm:text-sm h-11 px-3 rounded-lg border-2 border-gray-300 text-gray-700 hover:text-pink-500 hover:border-pink-400 hover:bg-pink-50 hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-2 md:-mt-24">
          <img
            src={bannerImage}
            alt="Technology stack illustration"
            className="w-full h-auto object-contain max-w-[300px] sm:max-w-[360px] md:max-w-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
