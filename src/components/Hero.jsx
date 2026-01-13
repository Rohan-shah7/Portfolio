export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I’m Rohan Shah
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
        I build modern web applications with React & Tailwind
      </p>
      <a
        href="#contact"
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-400 text-white rounded-lg hover:scale-105 transition-transform"
      >
        Contact Me
      </a>
    </section>
  )
}
