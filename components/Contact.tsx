import React from 'react';

interface ContactProps {
  title?: string;
  email?: string;
  linkedinUrl?: string;
  message?: string;
}

const Contact: React.FC<ContactProps> = ({
  title = "Get In Touch",
  email = "your-email@example.com", // Placeholder
  linkedinUrl, // Placeholder, e.g., "https://linkedin.com/in/yourprofile"
  message = "I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!"
}) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"> {/* Added a light background */}
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
          {title}
        </h2>
        <p className="text-lg text-gray-700 mb-8"> {/* Slightly darker text for better contrast */}
          {message}
        </p>
        <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-6"> {/* Increased spacing */}
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5" // Added hover transform
            >
              Email Me
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5" // Added hover transform and darker text
            >
              Connect on LinkedIn
            </a>
          )}
        </div>
        {/* 
          Future enhancement: 
          <div className="mt-12">
            <p className="text-gray-600">Or, fill out this quick form:</p>
            {/* Contact form component or inline form elements would go here * /
          </div> 
        */}
      </div>
    </div>
  );
};

export default Contact;
