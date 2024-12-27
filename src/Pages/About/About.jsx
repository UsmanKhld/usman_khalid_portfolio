import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import pfp from "../../assets/pfp.jpeg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-josefin text-white mb-12">About Me</h1>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Profile Picture Section */}
          <div className="md:w-1/3">
            <img
              src={pfp}
              alt="Usman's profile"
              className="rounded-lg w-full object-cover shadow-lg"
            />
          </div>

          {/* About Me Content Section */}
          <div className="md:w-2/3 text-gray-300">
            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-josefin text-white mb-4">
                Hello, I'm Usman
              </h2>
              <p className="mb-4 font-light">
                I'm a Computer Science major in my senior year. I am passionate
                about building full-stack applications that have real uses for
                people or businesses. I also love to research and work with AI
                in my projects
              </p>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-xl font-josefin text-white mb-3">
                Education
              </h3>
              <p className="font-light">
                Bachelor of Science in Computer Science
                <br />
                University of Houston - Downtown
                <br />
                Expected Graduation: December 2025
              </p>
            </div>

            {/* Interests */}
            <div className="mb-8">
              <h3 className="text-xl font-josefin text-white mb-3">
                Technical Interests
              </h3>
              <p className="font-light">
                Full-stack development, Artificial Intelligence, Machine
                Learning
              </p>
            </div>

            {/* Personal Interests */}
            <div className="mb-8">
              <h3 className="text-xl font-josefin text-white mb-3">
                When I'm Not Coding
              </h3>
              <p className="font-light">
                I love playing and watching soccer, reading and listening to
                podcasts about tech.
              </p>
            </div>

            {/* Goals */}
            <div>
              <h3 className="text-xl font-josefin text-white mb-3">
                What I'm Looking For
              </h3>
              <p className="font-light">
                Right now I am looking for an internship for Summer 2025. With
                hopes that would propel me to a full time job in 2026
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
