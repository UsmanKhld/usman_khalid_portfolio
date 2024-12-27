import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { FaGithub } from "react-icons/fa"; // Make sure to install react-icons

const Projects = () => {
  const experiences = [
    {
      title: "Full-Stack Developer - AudioInsights",
      company: "Personal Project",
      date: "October 2024",
      description: [
        "Designed an audio-to-text system allowing students to summarize and query lecture content, achieving sub-5 second response times.",
        "Enabled transcription of both uploaded MP3 files and live audio for flexible input processing.",
        "Leveraged vector databases for efficient transcript processing and similarity-based responses.",
      ],
      github: "https://github.com/UsmanKhld/audio-insight",
      technologies: [
        "Streamlit",
        "OpenAI",
        "Whisper",
        "Groq",
        "Pinecone",
        "Git",
      ],
    },
    {
      title: "Full-Stack Developer - MoneyMentor",
      company: "Personal Project",
      date: "November 2024",
      description: [
        "Built an AI-driven financial Q&A tool retrieving top 5 relevant sources for user queries with 100% document-grounded answers.",
        "Integrated a GPT-based zero-shot agent pipeline to deliver concise, context-specific financial insights.",
        "Ensured high retrieval accuracy with structured prompts and citation tracking for complete transparency.",
      ],
      github: "https://github.com/UsmanKhld/audio-insight",
      technologies: [
        "React",
        "Django",
        "PostgreSQL",
        "OpenAI",
        "PgVector",
        "LangChain",
      ],
    },
    {
      title: "Full-Stack Developer - Restaurant Website",
      company: "Local Restaurant",
      date: "September 2024",
      description: [
        "Developed a fully functional website with online ordering services for a local restaurant.",
        "Contributed to a 20% increase in sales as well as a gateway for online traffic.",
        "Implemented Stripe API to process payments from customers to the restaurant.",
      ],
      github: "https://github.com/zayeemZaki/U-Eats",
      technologies: ["ReactJS", "NodeJS", "JavaScript", "HTML", "CSS", "Git"],
    },
  ];

  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-josefin text-white mb-12">Projects</h1>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border border-white p-6 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-josefin text-white">
                    {exp.title}
                  </h2>
                  <h3 className="text-xl text-gray-300 mt-1">{exp.company}</h3>
                  <p className="text-gray-400 mt-1">{exp.date}</p>
                </div>
                {exp.github && (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
              </div>

              <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
