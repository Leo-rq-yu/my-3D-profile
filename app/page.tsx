import dynamic from 'next/dynamic';
import Section from '../components/Section'; // Assuming components are in ../components
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

// Dynamically import ThreeHero with SSR disabled and a loading fallback
const ThreeHero = dynamic(() => import('../components/ThreeHero'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex justify-center items-center bg-gray-900">
      <p className="text-white text-xl">Loading Interactive Hero...</p>
    </div>
  ),
});

// Placeholder data - user will replace these
const experienceEntries = [
  { id: 1, company: "Innovate Solutions", role: "Lead Developer", date: "Jan 2021 - Present", description: "Leading development of next-gen web applications using React, Next.js, and Node.js. Collaborating with cross-functional teams to deliver high-quality software products." },
  { id: 2, company: "Future Tech Inc.", role: "Frontend Developer", date: "Jun 2018 - Dec 2020", description: "Developed and maintained responsive user interfaces for various client projects. Specialized in React and Vue.js." },
  { id: 3, company: "Startup X", role: "Junior Developer", date: "May 2017 - May 2018", description: "Assisted senior developers in building and testing web applications. Gained experience with agile methodologies and version control." },
];

const projectEntries = [
  { id: 1, name: "Personal Portfolio", description: "This very portfolio site, built with Next.js, Three.js, and Framer Motion to showcase my skills and projects.", technologies: ["Next.js", "React", "Three.js", "Tailwind CSS", "Framer Motion"], imageUrl: "/placeholder-project1.jpg", link: "#" },
  { id: 2, name: "E-commerce Platform Concept", description: "A concept e-commerce site featuring product listings, cart functionality, and a mock checkout process. Built to explore full-stack development.", technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"], imageUrl: "/placeholder-project2.jpg", link: "#" },
  { id: 3, name: "Data Visualization Dashboard", description: "A dashboard for visualizing complex datasets using D3.js and React, providing interactive charts and graphs.", technologies: ["React", "D3.js", "JavaScript", "CSS"], imageUrl: "/placeholder-project3.jpg", link: "#" },
];

const skillEntries = [
  { id: 1, name: "JavaScript (ES6+)"},
  { id: 2, name: "TypeScript"},
  { id: 3, name: "React & React Native"},
  { id: 4, name: "Next.js"},
  { id: 5, name: "Three.js / R3F"},
  { id: 6, name: "Node.js & Express"},
  { id: 7, name: "Python & Django"},
  { id: 8, name: "Tailwind CSS & SASS"},
  { id: 9, name: "Framer Motion & GSAP"},
  { id: 10, name: "Git & GitHub"},
  { id: 11, name: "Docker"},
  { id: 12, name: "SQL & NoSQL Databases"},
];

export default function Home() {
  return (
    <div className="overflow-x-hidden antialiased"> {/* Added antialiased for smoother fonts */}
      <header className="h-screen min-h-[700px] w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
        <ThreeHero />
      </header>
      <main className="bg-gray-100"> {/* Changed main bg for contrast */}
        <Section>
          <Experience title="Work Experience" entries={experienceEntries} />
        </Section>
        <Section>
          <Projects title="Featured Projects" entries={projectEntries} />
        </Section>
        <Section>
          <Skills title="Core Skills & Technologies" skills={skillEntries} />
        </Section>
        <Section>
          {/* Placeholder email and LinkedIn, user should update these */}
          <Contact 
            email="hello@example.com" 
            linkedinUrl="https://www.linkedin.com/in/yourprofile/"
            message="I'm passionate about creating innovative web experiences. Let's connect and discuss how we can build something amazing together!"
          />
        </Section>
      </main>
      <footer className="bg-gray-800 text-white text-center p-8"> {/* Increased padding */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Name Here. All rights reserved.</p>
        <p className="text-xs mt-1">Built with Next.js, Tailwind CSS, Three.js, and ❤️</p>
      </footer>
    </div>
  );
}
