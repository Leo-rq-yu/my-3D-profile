import React from 'react';

interface ExperienceEntry {
  id: number; // Added id for key prop
  company: string;
  role: string;
  date: string;
  description?: string; // Optional description
}

interface ExperienceProps {
  title?: string;
  entries: ExperienceEntry[];
}

const Experience: React.FC<ExperienceProps> = ({ title = "Experience", entries }) => {
  return (
    // Container with padding, centered content, and max width
    <div className="py-8 px-4 mx-auto max-w-screen-lg sm:py-12 lg:px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 md:mb-10">
        {title}
      </h2>
      {/* Using space-y for consistent spacing between entries if preferred, or mb on each entry */}
      <div className="space-y-8"> 
        {entries.map((entry) => (
          // Each entry with padding, background, shadow, and hover effect
          <div 
            key={entry.id} 
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out border border-gray-200"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                {entry.company}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 whitespace-nowrap mt-1 sm:mt-0">
                {entry.date}
              </p>
            </div>
            <p className="text-md sm:text-lg text-blue-600 font-medium my-1">
              {entry.role}
            </p>
            {entry.description && (
              <p className="text-gray-700 text-sm mt-2">
                {entry.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
