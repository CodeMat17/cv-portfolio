"use client";

import { STAGGER_CHILD_VARIANTS } from "@/lib/constants";
import { motion, type MotionProps } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define typed motion components
const MotionDiv = motion.div as React.ComponentType<
  MotionProps & React.HTMLAttributes<HTMLDivElement>
>;

const projects = [
  {
    title: "Volks Rental Services",
    description:
      "A real-time Volks rental booking application. Built with real-time updates and responsive design.",
    image: "/volks.webp",
    tags: ["Next.js", "TailwindCSS", "Shadcn"],
    github: "https://github.com/matthewchukwu/edumanage-pro",
    demo: "https://volks-rentals.vercel.app/",
  },
  {
    title: "Disney Clone",
    description:
      "This project is built with modern technologies. it has a sleek UI and dynamic data fetching system.",
    image: "/disney.webp",
    tags: ["Next.js", "TailwindCSS", "Shadcn", "Supabse"],
    github: "https://github.com/matthewchukwu/staybooker",
    demo: "https://disney-m.vercel.app/",
  },
  {
    title: "ConnectHub",
    description:
      "Feature-rich social networking platform with real-time messaging, post sharing, and media uploads. Includes advanced user privacy controls and engagement analytics.",
    image: "",
    tags: ["Next.js", "TailwindCSS", "Shadcn", "Convex"],
    github: "https://github.com/matthewchukwu/connecthub",
    demo: "",
  },
  {
    title: "FinTrack Dashboard",
    description:
      "Comprehensive financial management dashboard with expense tracking, investment portfolio analysis, and automated reporting. Integrates with multiple payment gateways and banking APIs.",
    image: "",
    tags: ["Next.js", "TailwindCSS", "Shadcn", "D3.js", "Convex"],
    github: "https://github.com/matthewchukwu/fintrack",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section id='projects' className='py-20 px-4'>
      <MotionDiv
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className='max-w-7xl mx-auto'>
        <MotionDiv
          variants={STAGGER_CHILD_VARIANTS}
          className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400'>
            Curated Projects
          </h2>
          <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            A showcase of my recent work, demonstrating expertise in full-stack
            development and responsive design
          </p>
        </MotionDiv>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {projects.map((project, index) => (
            <MotionDiv
              key={index}
              variants={STAGGER_CHILD_VARIANTS}
              className='group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'>
              {/* <div className='relative w-[500px] overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className='object-cover w-[500px] h-[600px] border group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
              </div> */}
              <div className='w-full'>
                {project.image ? (
                  <div className='relative max-w-[500px] h-[150px]'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      // width={500}
                      // height={400}
                      fill
                      priority
                      className='object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
                  </div>
                ) : (
                  <p className='text-center py-16 text-2xl font-semibold text-muted-foreground animate-pulse'>
                    Under reconstruction
                  </p>
                )}
              </div>

              <div className='p-6 space-y-4'>
                <h3 className='text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 line-clamp-2'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-sm px-3 py-1 rounded-full bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 backdrop-blur-sm'>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className='flex gap-4 pt-2'>
                  {/* <Link
                    href={project.github}
                    target='_blank'
                    className='flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                    <Github className='h-5 w-5' />
                    <span className='text-sm font-medium'>Code</span>
                  </Link> */}
                  {project.demo ? (
                    <Link
                      href={project.demo}
                      target='_blank'
                      className='flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                      <ExternalLink className='h-5 w-5' />
                      <span className='text-sm font-medium'>Live Demo</span>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </section>
  );
}
