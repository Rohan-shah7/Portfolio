export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat transition-colors duration-300 px-6"
      style={{ backgroundImage: "url('/src/assets/bg.jpg')" }} // Make sure bg.jpg is in src/assets
    >
      {/* Overlay for dark mode and readability */}
      <div className="bg-black/40 dark:bg-black/60 w-full h-full absolute top-0 left-0 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white dark:text-white">
          Hi, I’m <span className="text-purple-400 dark:text-cyan-400">Rohan Shah</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 mb-6 max-w-xl leading-relaxed">
          I build modern, responsive, and interactive web applications using React, Tailwind CSS,
          and other modern frontend technologies.
        </p>

        <a
          href="#projects"
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-400 text-white rounded-lg shadow-lg hover:scale-105 transition-transform font-semibold"
        >
          See My Work
        </a>

        {/* Social links */}
        <div className="mt-10 flex space-x-6">
          <a
            href="https://github.com/Rohan-shah7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 dark:hover:text-cyan-400 transition-colors text-2xl font-semibold"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 dark:hover:text-cyan-400 transition-colors text-2xl font-semibold"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
