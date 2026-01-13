export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            src="/src/assets/bg.jpg" // Replace with your photo
            alt="Rohan Shah"
            className="rounded-xl shadow-lg border-4 border-purple-500 dark:border-cyan-400 w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Hi! I’m <strong>Rohan Shah</strong>, a passionate web developer specializing in
            <span className="text-purple-500 dark:text-cyan-400 font-semibold"> React, Tailwind CSS, and modern frontend technologies</span>.
            I love building clean, responsive, and interactive web experiences that delight users.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            When I’m not coding, I enjoy exploring new UI/UX trends, learning about emerging web
            technologies, and contributing to open-source projects.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-400 text-white rounded-lg shadow-lg hover:scale-105 transition-transform font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
