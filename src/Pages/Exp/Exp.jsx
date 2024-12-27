import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { FaGithub } from "react-icons/fa"; // Make sure to install react-icons

const Exp = () => {
  const experiences = [
    {
      title: "Research Assistant - Artificial Intelligence",
      company: "University of Houston - Downtown",
      date: "September 2024 - Current",
      description: [
        "Conducting research on informed search algorithms under Professor Izadi, exploring enhancements for algorithms like A* and IDA*",
        "Developing a more efficient search algorithm through theoretical analysis and experiments.",
      ],
      technologies: ["Python"],
    },
    {
      title: "Full-Stack Developer",
      company: "HISCHOLAR",
      date: "February 2024 - September 2024",
      description: [
        "Designed a database of 100+ users with seamless integration between a registration form and AWS-hosted PostgreSQL.",
        "Built 4 pages enabling 5000+ scholarships and careers to be searched, sorted, and filtered.",
        "Beta tested with 200 users, achieving feedback-driven improvements using AGILE principles",
      ],
      technologies: ["ReactJS", "Django", "Javascript", "Python", "Git", "AWS"],
    },
    {
      title: "Solutions technician",
      company: "UTOLEDO",
      date: "September 2023 - December 2023",
      description: [
        "Repaired 150+ laptops for students and faculty, achieving 100% customer satisfaction.",
        "Delivered fast turnaround times, ensuring efficient service for hardware issues.",
      ],
      technologies: [],
    },
    {
      title: "Lab TA",
      company: "University of Toledo",
      date: "August 2023 - December 2023",
      description: [
        "Instructed and helped students with their programming labs.",
        "Taught MATLAB and Java concepts to freshman students in class and personally tutored students who needed extra help.",
        "Went above and beyond to teach my class, resulting in a 10% increase in the students' grades who attended my labs.",
      ],
      technologies: [],
    },
    {
      title: "General and Online Services Manager",
      company: "Heaven in a Jar",
      date: "October 2018 - August 2022",
      description: [
        "Developed and maintained the company website, with frequent updates and regular maintenance.",
        "Utilized graphic design skills and social media knowledge to drive online traffic towards the business, leading to a 20% increase in sales.",
        "Led a team of employees as a manager, dividing responsibilities efficiently and increasing work productivity.",
      ],
      technologies: [],
    },
    // Add more experiences as needed
  ];

  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-josefin text-white mb-12">Experience</h1>

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

export default Exp;
