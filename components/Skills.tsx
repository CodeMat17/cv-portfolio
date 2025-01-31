"use client";

import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes } from "react";

const MotionDiv: React.FC<MotionProps & HTMLAttributes<HTMLDivElement>> = motion.div

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
  
    ],
  },
  {
    category: "Backend & Database",
    items: ["Node.js", "Supabase", "Convex", "REST APIs", 'MongoDB'],
  },
  {
    category: "Tools & Others",
    items: [
      "Git",
      "Vercel",
      "Shadcn/ui",
      "Zod",
      "NextAuth.js",
      "Clerk",
    ],
  },
  {
    category: "UI/UX & Performance",
    items: [
      "Responsive Design",
      "SEO Optimization",
      "Web Vitals",
      "Accessibility",
      "Component Design",
    ],
  },
];

export default function Skills() {
  return (
    <section id='skills' className='py-20 px-4 max-w-7xl mx-auto'>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-center mb-12'>
        <h2 className='text-3xl font-bold mb-4'>Skills & Technologies</h2>
        <p className='text-gray-600 dark:text-gray-300'>
          A comprehensive list of my technical skills and expertise
        </p>
      </MotionDiv>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {skills.map((skillGroup, groupIndex) => (
          <MotionDiv
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            viewport={{ once: true }}
            className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl font-bold mb-4'>{skillGroup.category}</h3>
            <div className='space-y-4'>
              {skillGroup.items.map((skill, index) => (
                <div key={skill} className='relative'>
                  <div className='flex justify-between mb-1'>
                    <span className='text-gray-700 dark:text-gray-300'>
                      {skill}
                    </span>
                  </div>
                  <MotionDiv
                    className='h-2 bg-blue-200 dark:bg-blue-900 rounded-full'
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
