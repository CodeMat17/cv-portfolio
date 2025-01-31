"use client";

import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
} from "@/lib/constants";
import { motion, type MotionProps } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { ContactModal } from "./ContactModal";
import { Button } from "./ui/button";

const MotionDiv = motion.div as React.ComponentType<
  MotionProps & React.HTMLAttributes<HTMLDivElement>
>;

const stat = [
  { tag: "12+", desc: "Years Experience" },
  { tag: "84+", desc: "Projects Delivered" },
  { tag: "50+", desc: "Happy Clients" },
];

export default function Hero() {
  return (
    <section className='relative w-full min-h-screen lg:h-[80vh] flex flex-col justify-center overflow-hidden'>
      {/* Animated Background */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white dark:from-gray-900 dark:via-gray-900/50 dark:to-gray-950'>
          <div className='absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
            <div className='absolute inset-0 bg-white/20 dark:bg-black/20' />
          </div>
        </div>
        <div className='absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-[100px]' />
        <div className='absolute right-0 top-0 -z-10 h-[310px] w-[310px] rounded-full bg-indigo-400/20 dark:bg-indigo-600/20 blur-[100px]' />
      </div>

      <div className='max-w-7xl mx-auto px-4 h-full'>
        <div className='flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center h-full py-8 lg:py-0'>
          {/* Content Section */}
          <MotionDiv
            initial='hidden'
            animate='show'
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className='w-full max-w-2xl text-center lg:text-left relative lg:pl-8 xl:pl-12'>
            <div className='space-y-8'>
              <MotionDiv
                variants={FADE_UP_ANIMATION_VARIANTS}
                className='flex items-center justify-center lg:justify-start gap-3'>
                <span className='px-4 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium backdrop-blur-sm border border-blue-200 dark:border-blue-800'>
                  Open to Work
                </span>
                <Sparkles className='h-5 w-5 text-yellow-500 animate-pulse' />
              </MotionDiv>

              <MotionDiv
                variants={FADE_UP_ANIMATION_VARIANTS}
                className='space-y-4'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                  I&apos;m{" "}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400'>
                    Matthew
                  </span>
                </h1>
                <div className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed space-y-4'>
                  <section className='leading-5'>
                    <p>Full Stack Developer</p>
                    <p className='text-sm text-gray-400'>
                      (Mobile Web Specialist)
                    </p>
                  </section>

                  <div className='h-[50px]'>
                    <TypeAnimation
                      sequence={[
                        "I build responsive & sleek web applications",
                        1000,
                        "I craft school management systems",
                        1000,
                        "I develop hotel booking platforms",
                        1000,
                        "I create social networking apps",
                        1000,
                        "I develop financial solutions",
                        1000,
                      ]}
                      wrapper='span'
                      speed={50}
                      repeat={Infinity}
                      className='text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium'
                    />
                  </div>
                  <p className='text-base md:text-lg'>
                    Ready to transform your ideas into exceptional digital
                    experiences using cutting-edge technologies and best
                    practices.
                  </p>
                </div>
              </MotionDiv>

              <MotionDiv
                variants={FADE_UP_ANIMATION_VARIANTS}
                className='flex flex-wrap justify-center lg:justify-start gap-4'>
                <Button asChild className='rounded-full px-8 py-6'>
                  <Link
                    href='#projects'
                    className='group relative  rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-800/20 transition-all duration-300 hover:-translate-y-0.5'>
                    <span className='flex items-center gap-2'>
                      View My Work
                      <ExternalLink className='h-4 w-4 group-hover:translate-x-1 transition-transform' />
                    </span>
                  </Link>
                </Button>
                {/* <Link
                  href='#contact'
                  className='group px-8 py-3 rounded-full border border-gray-300/50 dark:border-gray-700/50 font-medium hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:-translate-y-0.5'>
                  <span className='flex items-center gap-2'>
                    Let&apos;s Talk
                    <Terminal className='h-4 w-4 group-hover:rotate-12 transition-transform' />
                  </span>
                </Link> */}

                <ContactModal />
              </MotionDiv>

              <MotionDiv
                variants={FADE_UP_ANIMATION_VARIANTS}
                className='pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm'>
                {stat.map((item, i) => (
                  <div
                    key={i}
                    className='flex flex-col sm:flex-row items-center gap-2 px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50'>
                    <p className='font-medium'>{item.tag}</p>
                    <p>{item.desc}</p>
                  </div>
                ))}

                {/* <div className='flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50'>
                  <span className='font-medium'>84+ Projects Delivered</span>
                </div> */}
                {/* <div className='flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50'>
                  <span className='font-medium'>50+ Happy Clients</span>
                </div> */}
              </MotionDiv>
            </div>
          </MotionDiv>

          {/* Image Section */}
          <MotionDiv
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            initial='hidden'
            animate='show'
            className='relative w-[280px] sm:w-[300px] lg:w-[350px]'>
            <div className='relative aspect-square rounded-full p-6'>
              <Image
                src='/dev-matthew.webp'
                alt='Matthew - Developer'
                fill
                className='object-cover rounded-full hover:scale-[1.02] transition-transform duration-500'
                priority
              />
              <div className='absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent' />
            </div>

            {/* Decorative elements */}
            <div className='absolute -z-10 -inset-4 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-30 blur-2xl rounded-[100px]' />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
