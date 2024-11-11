import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Settings, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-6 h-6" />,
      skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Redux'],
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma'],
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6" />,
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
    },
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
    },
    {
      title: 'DevOps & Tools',
      icon: <Settings className="w-6 h-6" />,
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface p-6 rounded-xl hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;