import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  role?: string;
  description?: string;
  profileImage?: string;
  resumeLink?: string;
}

const HeroSection = ({
  name = "Hi, I'm Jalagam Akshan Sai",
  role = "Data Analyst skilled in transforming raw data into insightful visualizations and business strategies.",
  description = "I specialize in uncovering meaningful trends and solving business problems using Tableau, Excel, SQL, and Python.",
  profileImage = "https://media-hosting.imagekit.io/90bcaa3736a44510/1669447135922.jpeg?Expires=1839300222&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mbQaRYpSzLf1oIZbqCfFac9A1e9DQz28dxYU10frlL1X1j8YX50LoSs5txrQXgI7tBHFGAe3uYvsK0seouBajFXhBdkKvzMSfK39yuZc0oQZsOIkjKbtVXbpaqEsmPzTfOWthcs1LD4ES6tQjyXxGCqXKyaavtqUF5oEz-ERVAAp0bb3geNpQlU~19RspWolITXSXgqqUu9Ejw5CbyFDJMhqef-i~RKyUd1gxgUGOpXqael12Z6gN2XBji0~mu01212E~eI4-joX-jPVH8q-iAjmzp3ah0IcCfxszrYc5VT9kPUDzlMtE2PGXq6vHbyLF4vYM1BRH~8XdeWBLf9-KA__",
  resumeLink = "https://drive.google.com/file/d/1dVevQkOqqWS4b2pXFVt_j9GD9v5qT38Q/view?usp=sharing",
}: HeroSectionProps) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {name}
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl font-medium text-blue-400 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {role}
            </motion.h2>

            <motion.p
              className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>

              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-900/20"
              >
                <ArrowDown className="mr-2 h-4 w-4" /> View Projects
              </Button>

              <Button
                asChild
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/20">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <button
            onClick={() => scrollToSection("skills")}
            className="text-gray-400 hover:text-white"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
