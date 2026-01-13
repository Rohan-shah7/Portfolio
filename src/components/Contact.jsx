export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Contact Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12">
          Want to work together or just say hi? Send me a message and I’ll get back to you soon!
        </p>

        {/* Contact Form */}
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Form submitted! (Add your backend logic here)')
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-400 transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-400 transition"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-400 transition resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-400 text-white rounded-lg shadow-lg hover:scale-105 transition-transform font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
