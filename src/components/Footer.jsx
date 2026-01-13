export default function Footer() {
  return (
    <footer className="bg-gray-400 dark:bg-gray-900 text-white dark:text-gray-300 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Branding / Name */}
        <div className="text-lg font-bold">
          Rohan Shah
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Rohan-shah7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 dark:hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 dark:hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          {/* Add more links if needed */}
        </div>

        {/* Copyright */}
        <div className="text-sm text-white dark:text-gray-400">
          &copy; {new Date().getFullYear()} Rohan Shah. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
