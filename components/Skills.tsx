import React from 'react';

interface SkillEntry {
  id: number;
  name: string;
  level?: string; // e.g., 'Intermediate', 'Advanced', or a percentage as string '80%'
  icon?: React.ReactElement; // Optional: for an SVG icon
}

interface SkillsProps {
  title?: string;
  skills: SkillEntry[];
}

const Skills: React.FC<SkillsProps> = ({ title = "My Skills", skills }) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div 
              key={skill.id} 
              className="bg-white shadow-md rounded-lg px-6 py-3 hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center space-x-3" // Added flex for icon
            >
              {skill.icon && <span className="text-blue-500">{skill.icon}</span>}
              <p className="text-lg font-semibold text-blue-600">{skill.name}</p>
              {skill.level && !skill.level.endsWith('%') && ( // Display level if not a percentage
                <p className="text-sm text-gray-500 ml-2">({skill.level})</p>
              )}
            </div>
          ))}
        </div>
        
        {/* Example of a more complex skill display with percentage levels (if skill.level was '80%') */}
        <div className="mt-10 space-y-6"> {/* Increased margin and spacing */}
          {skills.filter(s => s.level && s.level.endsWith('%')).map(skill => {
            // Remove the '%' and convert to number for width calculation
            const numericLevel = parseInt(skill.level!.replace('%', ''), 10);
            return (
              <div key={`progress-${skill.id}`}>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-blue-700">{skill.name}</span>
                  <span className="text-sm font-medium text-blue-700">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${numericLevel}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
