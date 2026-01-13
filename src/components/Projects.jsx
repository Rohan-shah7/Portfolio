import { useEffect, useState } from 'react'

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/Rohan-shah7/repos?sort=updated')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          My Projects
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12">
          Some of my recent work. Click a card to view the repository on GitHub.
        </p>

        {loading ? (
          <p className="text-gray-700 dark:text-gray-300">Loading projects...</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
              >
                {/* Project Image */}
                <img
                  src={repo.owner.avatar_url} // Placeholder image, replace with custom image if you have one
                  alt={repo.name}
                  className="w-full h-48 object-cover"
                />

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    {repo.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    {repo.description || 'No description available'}
                  </p>
                  <div className="mt-auto flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                    <span>{repo.language || 'N/A'}</span>
                    <span>⭐ {repo.stargazers_count}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
