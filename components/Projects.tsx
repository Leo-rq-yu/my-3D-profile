import React from 'react';

interface ProjectEntry {
  id: number; // For React key
  name: string;
  description: string;
  technologies: string[];
  link?: string; // Optional link to project
  imageUrl?: string; // Optional image URL for the project
}

interface ProjectsProps {
  title?: string;
  entries: ProjectEntry[];
}

const Projects: React.FC<ProjectsProps> = ({ title = "My Projects", entries }) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"> {/* Added a light background for the section */}
      <div className="max-w-5xl mx-auto"> {/* Increased max-width for better spacing */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-10"> {/* Increased gap */}
          {entries.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col" // Added flex-col for consistent button placement
            >
              {project.imageUrl && (
                <img className="w-full h-56 object-cover" src={project.imageUrl} alt={project.name} /> // Increased image height
              )}
              <div className="p-6 flex flex-col flex-grow"> {/* Added flex-grow to make content area fill space */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.name}</h3>
                <p className="text-gray-700 text-sm mb-4 flex-grow">{project.description}</p> {/* Added flex-grow to description */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Technologies:</h4> {/* Styled heading */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full" // Consistent badge styling
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300 self-start" // Ensure button is at the bottom and aligned left
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
