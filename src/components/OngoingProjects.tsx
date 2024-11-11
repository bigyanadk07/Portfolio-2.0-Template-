import React from 'react';
import { motion } from 'framer-motion';
import { Clock, GitBranch, Star } from 'lucide-react';

const OngoingProjects = () => {
  const projects = [
    {
      title: 'AI-Powered Code Assistant',
      description: 'Developing an AI code assistant that helps developers write better code faster.',
      progress: 75,
      technologies: ['Python', 'TensorFlow', 'GPT-3'],
      github: 'https://github.com/yourusername/ai-code-assistant',
      stars: 245,
      lastUpdated: '2 days ago',
    },
    {
      title: 'Blockchain Explorer',
      description: 'Building a modern blockchain explorer with real-time transaction tracking.',
      progress: 60,
      technologies: ['React', 'Web3.js', 'Node.js'],
      github: 'https://github.com/yourusername/blockchain-explorer',
      stars: 182,
      lastUpdated: '5 days ago',
    },
  ];

  return (
    <section id="ongoing" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Ongoing Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-surface rounded-xl p-6 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-gray-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch className="w-4 h-4" />
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      View on GitHub
                    </a>
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {project.lastUpdated}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OngoingProjects;