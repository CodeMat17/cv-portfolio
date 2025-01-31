"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    period: "2020 - Present",
    description:
      "Led development of multiple web applications using React, Node.js, and AWS.",
  },
  {
    title: "Full Stack Developer",
    company: "Another Tech Co",
    period: "2018 - 2020",
    description:
      "Developed and maintained various web applications using modern technologies.",
  },
  // Add more experiences
];

export default function Experience() {
  return (
    <section id='experience' className='py-20 px-4 max-w-7xl mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-center mb-12'>
        <h2 className='text-3xl font-bold mb-4'>Work Experience</h2>
        <p className='text-gray-600 dark:text-gray-300'>
          My professional journey and achievements
        </p>
      </motion.div>

      <div className='relative'>
        <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700' />
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative mb-8 ${
              index % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
            } md:w-1/2 p-6`}>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
              <div className='flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400'>
                <Calendar className='h-5 w-5' />
                <span>{experience.period}</span>
              </div>
              <h3 className='text-xl font-bold mb-2'>{experience.title}</h3>
              <h4 className='text-gray-600 dark:text-gray-300 mb-4'>
                {experience.company}
              </h4>
              <p className='text-gray-600 dark:text-gray-300'>
                {experience.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
