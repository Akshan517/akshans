import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ProjectCard from "./ProjectCard";
import ContactForm from "./ContactForm";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  ArrowUpIcon,
  ExternalLinkIcon,
  GraduationCapIcon,
  TrophyIcon,
} from "lucide-react";
import { Badge } from "./ui/badge";

const Home = () => {
  // Skills data
  const skills = {
    languages: ["Python", "C++", "SQL"],
    technologies: ["Tableau", "Tableau Prep Builder", "Excel"],
    coreSkills: ["Data Cleaning", "Statistical Analysis", "Data Visualization"],
    softSkills: [
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Attention to Detail",
    ],
  };

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Online Sales Data Analysis & Dashboard Creation",
      date: "November 2024",
      aim: "Discover trends in pricing, categories, and geographic performance.",
      approach:
        "Cleaned and analyzed sales data; built a dynamic Tableau dashboard.",
      outcomes:
        "Identified discount-driven revenue trends; informed marketing and stock decisions.",
      tools: ["Tableau", "Excel"],
    },
    {
      id: 2,
      title: "T20 World Cup Cricket Data Analytics",
      date: "October 2024",
      aim: "Build the best T20 playing XI using past performance data.",
      approach: "Cleaned Excel datasets, visualized performance in Tableau.",
      outcomes: "Created an optimal lineup with 90% predicted win probability.",
      tools: ["Excel", "Tableau"],
    },
    {
      id: 3,
      title: "International Footballers – 50+ Goals Analysis Dashboard",
      date: "December 2024",
      aim: "Visualize global footballers with 50+ international goals.",
      approach: "Extracted key player metrics and built a Tableau dashboard.",
      outcomes:
        "Showcased trends by decade, top countries, and players nearing the milestone.",
      tools: ["Tableau"],
    },
  ];

  // Education data
  const education = [
    {
      institution: "Lovely Professional University – Jalandhar, Punjab",
      period: "Feb 2025 – Present",
      degree: "B.Tech in Computer Science and Engineering",
    },
    {
      institution: "Narayana Junior College – Hyderabad, Telangana",
      period: "2020 – 2022",
      degree: "Intermediate – 98%",
    },
    {
      institution: "KKR's Gowtham High School – Gudiwada, Andhra Pradesh",
      period: "2018 – 2020",
      degree: "Matriculation – 100%",
    },
  ];

  // Certifications data
  const certifications = [
    {
      title: "Supervised Machine Learning",
      issuer: "Coursera",
      date: "Nov 2024",
    },
    {
      title: "Data Visualization",
      issuer: "Tata Group Job Simulation",
      date: "Jan 2025",
    },
    {
      title: "Data Analysis with Tableau",
      issuer: "Coursera",
      date: "Nov 2024",
    },
  ];

  // Achievements data
  const achievements = [
    "Solved 100+ problems on LeetCode",
    "Focused on Algorithms, SQL, and DSA",
    "Easy – 60+, Medium – 35+, Hard – 5",
    "5-Star Badge in SQL – HackerRank",
    "Completed all advanced SQL challenges",
  ];

  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section id="hero" className="relative">
        <HeroSection
          onContactClick={() => scrollToSection("contact")}
          onProjectsClick={() => scrollToSection("projects")}
        />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 bg-zinc-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technical Tools & Data Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Languages */}
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-zinc-700 hover:bg-zinc-600 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Technologies & Tools */}
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.technologies.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-zinc-700 hover:bg-zinc-600 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Core Skills */}
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.coreSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-zinc-700 hover:bg-zinc-600 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-amber-400">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.softSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-zinc-700 hover:bg-zinc-600 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education & Certifications Section */}
      <section
        id="education"
        className="py-20 px-4 md:px-8 lg:px-16 bg-zinc-900"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCapIcon className="w-8 h-8 mr-3 text-blue-400" />
                <h2 className="text-3xl font-bold">Education</h2>
              </div>

              <div className="space-y-8">
                {education.map((item, index) => (
                  <div key={index} className="bg-zinc-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold">
                      {item.institution}
                    </h3>
                    <p className="text-zinc-400 mt-1">{item.period}</p>
                    <p className="mt-2">{item.degree}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div className="space-y-12">
              {/* Certifications */}
              <div>
                <div className="flex items-center mb-8">
                  <ExternalLinkIcon className="w-8 h-8 mr-3 text-green-400" />
                  <h2 className="text-3xl font-bold">Certifications</h2>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-zinc-800 p-4 rounded-lg flex justify-between items-center"
                    >
                      <div>
                        <h3 className="font-medium">{cert.title}</h3>
                        <p className="text-sm text-zinc-400">{cert.issuer}</p>
                      </div>
                      <span className="text-sm text-zinc-500">{cert.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <div className="flex items-center mb-8">
                  <TrophyIcon className="w-8 h-8 mr-3 text-amber-400" />
                  <h2 className="text-3xl font-bold">Achievements</h2>
                </div>

                <div className="bg-zinc-800 p-6 rounded-lg">
                  <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-2"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-zinc-400">Email</p>
                  <p className="font-medium">akshan518@gmail.com</p>
                </div>
                <div>
                  <p className="text-zinc-400">Phone</p>
                  <p className="font-medium">+91-8639264973</p>
                </div>
                <div>
                  <p className="text-zinc-400">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/akshan-jalagam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    linkedin.com/in/akshan-jalagam
                  </a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-zinc-900 text-center">
        <div className="container mx-auto">
          <p>© 2025 Jalagam Akshan Sai. All rights reserved.</p>

          <Button
            variant="outline"
            size="icon"
            className="mt-4"
            onClick={scrollToTop}
          >
            <ArrowUpIcon className="h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Home;
